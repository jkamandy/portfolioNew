import { useState, useEffect } from 'react';

function Navbar( {items, handleSetScroll} ) {
  const [selectedItem, setSelectedItem] = useState('');

  // this allows for the section in the navbar to automatically be selected when the user
  // manually scrolls to that section on the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let selected = '';

      items.forEach((section) => {
        // Get the DOM element of the section by its ID
        const element = document.getElementById(section);
        // Check if the element exists and if its offset from the top of the page is less than or equal to the current scroll position plus a threshold (200 pixels in this case)
        if (element && element.offsetTop <= scrollPosition + 200) {
          selected = section;
        }
      });

      setSelectedItem(selected);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);


  const handleItemClick = (item) => {
    // setSelectedItem(item);
    handleSetScroll(item);
  };


  return (
     <div className='navbar'>
        {items.map((item) => (
        <div
          key={item}
          className={`navbar-text ${selectedItem === item ? 'selected' : ''}`}
          onClick={() => handleItemClick(item)}
        >
          {item}
        </div>
      ))}
     </div>
  )
}

export default Navbar
