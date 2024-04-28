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

  return (
     <div className='flex  w-screen pt-14 mx-28 justify-between'>
      <div className='flex flex-col gap-12'>
        <div id='HOME' className='flex flex-col w-11/12 h-screen'>
          <Navbar items={['ABOUT', 'EXPERIENCES', 'PROJECTS', 'CONTACT']} handleSetScroll={handleSetScroll}/>
          <Title/>
        </div>
        <div id='ABOUT' className='flex flex-col w-11/12 h-screen'>
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
        </div>
      </div>
        
        <Socials/>
     </div>
     
  )
}

export default HomePage
