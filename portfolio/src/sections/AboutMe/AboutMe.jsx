import { useState } from 'react'
import profile from '/Users/josephkamandy/portfolioNew/portfolio/src/assets/profile_pic3.svg'
import Skill from '../../components/skill/Skill'
import SkillList from '../../components/skillList/SkillList'

function AboutMe() {
   const skillsLangs = ['html', 'css', 'javascript', 'typescript', 'python', 'c++', 'java', 'c']
   const skillsTech = ['figma', 'git', 'react', 'react native', 'render', 'postman', 'vscode', 'eclipse']
   const skillsTech2 = ['microchip studio', 'mac os', 'windows', 'google cloud', 'microsoft 365']

  return (
     <div className='flex flex-col h-[100vh]'>
        <div className='subheading-container'>
            <span className='subtitle-text-w'>About</span>
            <span className='subtitle-text-o'>Me</span>
        </div>

        <div className='flex'>
           <div className='flex mt-[5rem] w-[30vw] justify-center align-center'>
               <div>
                     <img src={profile}></img>
               </div>
           </div>
           <div className='flex mt-[3rem] flex-col w-[60vw]'>
               <div className='flex flex-col w-[55vw] '>
                  <span className='subheading-text mt-[3rem]'>
                     My love for technology began with countless hours sitting on a stool, captivated by an old, fat CRT TV. This early fascination with how things worked made my childhood, along with my trusty old PS3, truly memorable. The endless days spent exploring games sparked a deep curiosity in me. I wanted to understand the magic behind these games and how they were made, which initially led me to dream of becoming a video game developer. 
                  </span>

                  <span className='subheading-text mt-[2rem]'>
                     As I grew older, my passion for technology only deepened. I realized that the skills and knowledge required to create video games could be applied to a broader field, and I thought, "Why limit myself to video games?" This idea pushed me to pursue software development. This career path not only satisfies my excitement for creating and developing new things but also aligns perfectly with my enduring love for technology. Through software development, I can explore various domains, innovate, and bring my ideas to life, making it the perfect blend of my early interests and my evolving aspirations.  
                  </span>
             </div>

             <br/>
             <br/>


              <div className='flex'>
                 <SkillList skills={skillsLangs}></SkillList>
               </div>
               <br/><br/>
               <div className='flex'>
                 <SkillList skills={skillsTech}></SkillList>
               </div>

               <div className='flex mt-1'>
                 <SkillList skills={skillsTech2}></SkillList>
               </div>
           </div>

        </div>
        
        
     </div>
  )
}

export default AboutMe
