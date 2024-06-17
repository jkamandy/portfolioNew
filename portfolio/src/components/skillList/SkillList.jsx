import { useState } from 'react'
import Skill from '../skill/Skill'

function SkillList({ skills }) {
  
  return (
    <div className='flex gap-x-1.5'>
        {skills.map((skill, index) => (
            <Skill key={index} name={skill} />
        ))}
    </div>
  )
}

export default SkillList
