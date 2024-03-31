import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Title from '../../components/title/Title'
import Socials from '../../components/socials/Socials'

function HomePage() {

  return (
     <div className='flex h-screen w-screen pt-14 mx-28 justify-between'>
      <div className='flex flex-col w-11/12'>
        <Navbar/>
        <Title/>
      </div>
        
        <Socials/>
        
     </div>
  )
}

export default HomePage
