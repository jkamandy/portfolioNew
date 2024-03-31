import { useState } from 'react'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFile } from "react-icons/fa";


function Socials() {

  return (
     <div className='flex flex-col'>
        <a className='social-icons' href='https://github.com/jkamandy'><FaGithub/></a>
        <a className='social-icons' href='https://www.linkedin.com/in/joseph-kamandy-8649b4225/'><FaLinkedin/></a>
        <a className='social-icons' href='https://drive.google.com/file/d/1h7p3eHSeU--vYt1SXk9zBuvmYgHgj9ch/view?usp=sharing'><FaFile/></a>
     </div>
  )
}

export default Socials
