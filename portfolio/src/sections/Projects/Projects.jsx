import { useState } from 'react'
import ProjectCard from '../../components/card/Card'
import MoreInfoPopover from '../../components/Popover/MoreInfoPopover'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiSupabaseFill } from "react-icons/ri";



function Projects() {
    const projectsData = [
        {
            name: 'MyFitnessFriend',
            type: 'MOBILE APP',
            description: "A tool designed to keep track of your mental health and wellness",
            link: "",
            techStack: [<FaReact/>, <FaHtml5/>, <FaCss3Alt/>, <IoLogoJavascript/>, <RiSupabaseFill/>]
        },
        {
            name: 'Top It Detailing',
            type: 'WEB APP',
            description: "Online representation for client in order to boost the company’s traffic",
            link: "",
            techStack: [<FaReact/>, <FaHtml5/>, <FaCss3Alt/>, <IoLogoJavascript/>]

        },
        {
            name: 'MyFitnessFriend',
            type: 'MOBILE APP',
            description: "A tool designed to keep track of your mental health and wellness",
            link: ""
        },
      ]

  return (
     <div id='PROJECTS' className='flex flex-col h-[100vh]'>
        <div className='subheading-container'>
            <span className='subtitle-text-w'>My</span>
            <span className='subtitle-text-o'>Projects</span>
        </div>
        <div className='flex h-[100vh] justify-center items-center'>
            <div class="grid grid-cols-3 gap-x-11 cg- ml-[10rem] mt-[2rem]">
                {projectsData.map((data, index) => (
                    <ProjectCard props={data}/>
                )
                )}
            </div>
        </div>
     </div>
  )
}

export default Projects
