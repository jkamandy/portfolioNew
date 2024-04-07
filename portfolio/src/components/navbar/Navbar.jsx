import { useState } from 'react'

function Navbar( {handleSetScroll} ) {
  const [selectedItem, setSelectedItem] = useState('ABOUT');

  const handleItemClick = (item) => {
    setSelectedItem(item);
    handleSetScroll(item);
  };

  return (
     <div className='flex items-center justify-around h-14 w-[32rem] bg-navbar-dark rounded-2xl fixed self-center ml-[10rem]'>
        <div
            className={`navbar-text ${selectedItem === 'ABOUT' ? 'selected' : ''}`}
            onClick={() => handleItemClick('ABOUT')}
        >
            ABOUT
        </div>
        <div
            className={`navbar-text ${selectedItem === 'EXPERIENCES' ? 'selected' : ''}`}
            onClick={() => handleItemClick('EXPERIENCES')}
        >
            EXPERIENCES
        </div>
        <div
            className={`navbar-text ${selectedItem === 'PROJECTS' ? 'selected' : ''}`}
            onClick={() => handleItemClick('PROJECTS')}
        >
            PROJECTS
        </div>
        <div
            className={`navbar-text ${selectedItem === 'CONTACT' ? 'selected' : ''}`}
            onClick={() => handleItemClick('CONTACT')}
        >
            CONTACT
        </div>
     </div>
  )
}

export default Navbar
