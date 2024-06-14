import * as React from 'react';
import { useEffect, useState, useRef } from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import MoreInfoPopover from '../Popover/MoreInfoPopover';

export default function BasicTimeline({ items }) {
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prevVisibleItems) => Math.min(prevVisibleItems + 1, items.length));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 } // Adjust threshold as needed
    );

    items.forEach((_, index) => {
      const timelineItem = document.getElementById(`timeline-item-${index}`);
      if (timelineItem) {
        observer.observe(timelineItem);
      }
    });

    return () => {
      items.forEach((_, index) => {
        const timelineItem = document.getElementById(`timeline-item-${index}`);
        if (timelineItem) {
          observer.unobserve(timelineItem);
        }
      });
    };
  }, [items]);

  return (
    <Timeline
      sx={{
        transform: 'scale(1.2)',
        justifyContent: 'center'
      }}
    >
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          id={`timeline-item-${index}`}
          sx={{
            opacity: index < visibleItems ? 1 : 0, // Set opacity based on index
            transition: 'opacity 2s ease', // Smooth transition for opacity change
          }}
        >
          <TimelineOppositeContent color="textSecondary">
            <span className='text-light-gray font-medium'>{item.dateRange}</span>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <MoreInfoPopover popupItems={{company: item.companyName, position: item.role, roleDecription: item.description }}/>
            <div className='timeline-subtext'>{item.role}</div>
            {/* <div className='timeline-subtext-u'>{item.moreInfo}</div> this line will be a pop up modal */}
            <br/>
            <br/>
            
          </TimelineContent>
        </TimelineItem>
      ))}

    </Timeline>
  );
}