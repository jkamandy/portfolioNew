import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'

function HomePage() {

  return (
     <div className='flex h-screen w-screen'>
      <div className='flex w-11/12'>
        <Navbar/>
      </div>
        
        <div className='flex flex-col'>
          <Navbar/>
        </div>
        
     </div>
  )
}

export default HomePage
