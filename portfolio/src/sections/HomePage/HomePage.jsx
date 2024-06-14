import { useState, useEffect } from 'react'

import Navbar from '../../components/navbar/Navbar'
import Title from '../../components/title/Title'
import Socials from '../../components/socials/Socials'
import AboutMe from '../AboutMe/AboutMe'
import Experiences from '../Experiences/Experiences'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

function HomePage() {
  const [selectedSection, setSelectedSection] = useState('');
  const [visibleItems, setVisibleItems] = useState(0);


  const handleSetScroll = (section) => {
    setSelectedSection(section);
    console.log(section)
  };

  useEffect(() => {
    if (selectedSection) {
      const section = document.getElementById(selectedSection);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedSection]);

  const component_names = ['ABOUT', 'EXPERIENCES', 'PROJECTS', 'CONTACT']

  const components = [
    { id: 'ABOUT',
      component: <div id='ABOUT' className='flex flex-col w-11/12 h-screen'>
          <AboutMe/>
    </div>,
    },
    
    { id: 'EXPERIENCES',
      component:<div id='EXPERIENCES' className='flex flex-col w-11/12 h-screen'>
          <Experiences/>
    </div>,
    },
    { id: 'PROJECTS',
      component:<div id='PROJECTS' className='flex flex-col w-11/12 h-screen'>
          <Projects/>
    </div>,
    },
    { id: 'CONTACT',
      component:<div id='CONTACT' className='flex flex-col w-11/12 h-screen'>
          <Contact/>
    </div>,
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prevVisibleItems) => prevVisibleItems + 1);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    component_names.forEach((section_name) => {
      const section = document.getElementById(section_name);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      component_names.forEach((section_name) => {
        const section = document.getElementById(section_name);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [components]);

  return (
     <div className='flex  w-screen pt-14 mx-28 justify-between'>
      <div className='flex flex-col gap-12'>
        <div id='HOME' className='flex flex-col w-11/12 h-screen opacity-0 animate-fadeIn'>
          <Navbar items={['ABOUT', 'EXPERIENCES', 'PROJECTS', 'CONTACT']} handleSetScroll={handleSetScroll}/>
          <Title/>
        </div>

        {components.map((item, index) => (
          <div key={index} style={{ opacity: index < visibleItems ? 1 : 0, transition: 'opacity 2s ease' }}>
          {item.component}
          </div>
        ))}

        
        {/* <div id='ABOUT' className='flex flex-col w-11/12 h-screen'>
          <AboutMe/>
        </div>
        <div id='EXPERIENCES' className='flex flex-col w-11/12 h-screen'>
          <Experiences/>
        </div>
        <div id='PROJECTS' className='flex flex-col w-11/12 h-screen'>
          <Projects/>
        </div>
        <div id='CONTACT' className='flex flex-col w-11/12 h-screen'>
          <Contact/>
        </div> */}

      </div>
        
        <Socials/>
     </div>
     
  )
}

export default HomePage
