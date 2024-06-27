import { useState } from 'react'
import { User } from '@nextui-org/react';
import profile from '/src/assets/profile_pic3.svg'
import Profile from '../../components/profile/Profile';
// import profile from '/Users/josephkamandy/portfolioNew/portfolio/src/assets'

function Contact() {
 

  return (
     <div className='flex'>
         <div id='CONTACT' className='flex flex-col h-[100vh] justify-center ml-[5rem]'>
            <div className='subheading-container flex-col'>
                  <span className='contact-text'>Let's</span>
                  <span className='contact-text'>Get</span>
                  <span className='contact-text'>Connected!</span>
            </div>
         </div>

         {/* <User
            src='/src/assets/profile_pic3.svg'
            name="Tony Reichert"
            size="xl"
         /> */}

         {/* <User   
            name="Yosuf Kamandy"
            description="Software Developer"
            
            avatarProps={{
               src: '/src/assets/profile_pic3.svg',
               size: 'lg',
            }}
         /> */}
         <div className='flex flex-col h-[100vh] w-[40vw] justify-center align-center'>
            <div className='flex h-[9rem] justify-center'>
               <Profile/>
            </div>
         </div>
         
     </div>
  )
}

export default Contact
