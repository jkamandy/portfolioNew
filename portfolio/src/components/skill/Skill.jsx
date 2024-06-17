import { useState } from 'react'

function Skill({ name }) {
 

  return (
     <div className='skill'>
        <span className='skillText'>{name.toUpperCase()}</span>
     </div>
  )
}

export default Skill
