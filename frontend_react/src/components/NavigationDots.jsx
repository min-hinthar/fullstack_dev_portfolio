import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
            <a 
                href={`#${item}`} 
                key={item + index}
                onClick={() => setToggle(false)}
                className='app__naviation-dot'
                style={active === item ? { backgroundColor: '#313BAC'} : {}}
            />
        ))}
    </div>
  )
}

export default NavigationDots