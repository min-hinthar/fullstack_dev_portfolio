import React from 'react';
import { NavigationDots, SocialMedia } from '../components'; 

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div 
        id={idName}
        className={`app__container ${classNames}`}
    >
        <SocialMedia />
        <div className='app__wrapper app__flex'>
            <Component />
        {/* Copyright */}
            <div className='copyright'>
                <p className='p-text'>
                    Ⓒ 2023 MIN K.K
                </p>
                <p className='p-text'>
                    All Rights Reserved
                </p>
            </div>
        </div>
    {/* Navigation Dots */}
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap