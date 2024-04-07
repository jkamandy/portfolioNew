import { useState } from 'react'

function Title() {
 

  return (
     <div className='flex flex-col justify-end h-[75vh]'>
        <span className='title-text-w'>Hi,</span>
        <div className='flex gap-4'>
            <span className='title-text-w'>I'm</span>
            <span className='title-text-o'>Yosuf Kamandy</span>
        </div>
        <div className='flex w-9/12 '>
            <span className='subheading-text mt-[3rem]'>
                I’m a Computer Science graduate from the University of California, Irvine. I’m inspired by the endless opportunities and exploration of creativity
                code is able to bring and, that, fueled by my passion to develop innovative software, keeps me motivated to constantly develop my skills and learn
                new and improving technologies.  
            </span>
        </div>
        
     </div>
  )
}

export default Title
