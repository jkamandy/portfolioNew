import { useState } from 'react'
import BasicTimeline from '../../components/timeline/Timeline'
import OppositeContentTimeline from '../../components/timeline/Timeline'

function Experiences() {
 
  const experiencesData = [
    {
        dateRange: 'August 2022 - January 2023',
        companyName: 'CodeNinjas',
        role: 'Coding Instructor',
        description: "Throughout my time at CodeNinjas, I’ve successfully trained and mentored a diverse group of students from grades 1-6 in various programming concepts and languages, including MIT Scratch and Microsoft Makecode. I’ve facilitated engaging and interactive learning experiences, utilizing hands-on projects, games, and challenges to reinforce programming concepts and encourage creativity. And I’ve collaborated with other Senseis and staff members to maintain a cohesive and effective team, providing supportand sharing best practices to ensure a high-quality learning experience for all students."
    },
    {
        dateRange: 'November 2022 - November 2023',
        companyName: 'Cabin',
        role: 'Front-End Software Engineer',
        description: "I have proficiently delivered high-quality, client-specific web pages through utilization of React framework, JavaScript, HTML, and CSS for both front-end and back-end development tasks. I've utilized a combination of creative and analytical thinking to develop comprehensive and scalable solutions for client-specific needs and requirements. I made sure to deliver consistent user experience across all devices, leading to increased engagement, reduced bounce rates, and improved customer satisfaction. I've collaborated with cross-functional teams to develop, test, and deploy web pages while maintaining project timelines and delivering exceptional customer satisfaction."
    },
    {
        dateRange: 'November 2023 -  June 2024',
        companyName: 'Gap Year',
        role: 'Focusing on academics/self-development',
        description: 'More Info'
    },
    {
        dateRange: 'July 2024 - September 2024',
        companyName: 'Applied Medical',
        role: 'Software Engineering Intern',
        description: 'More Info'
    },
  ]

  return (
     <div id='EXPERIENCES' className='flex flex-col align-center h-[100vh]'>
        <div className='subheading-container'>
            <span className='subtitle-text-w'>My</span>
            <span className='subtitle-text-o'>Experience</span>
            
        </div>
        <div className='flex ml-[10rem] h-[100vh]'>
            
                <BasicTimeline items={experiencesData}/>
            
        </div>
        
        
     </div>
  )
}

export default Experiences
