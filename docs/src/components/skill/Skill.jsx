import { useState } from 'react'
import {Button} from "@nextui-org/react";


function Skill({ name }) {
 

  return (
    //  <div className='skill'>
    //     <span className='skillText'>{name.toUpperCase()}</span>
    //  </div>
     <div className='flex z-0'>
        <Button className='skill' color='default' variant='bordered'>
             <span className='skillText'>{name.toUpperCase()}</span>
        </Button>  
     </div>

  )
}

export default Skill
