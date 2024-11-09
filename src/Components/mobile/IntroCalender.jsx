import React from 'react';
import icon from '../../assets/pictures/rb_3839.png';
import { useEffect,useState } from 'react';
import ScreenSize from './ScreenSize';
const  IntroCalender = () => {
    const [hideIntro,setHideIntro]=useState(false);
    const [fadeOut,setFadeOut]=useState(false);
    const {isDesktopOrLaptop,isTablet,isMobile}=ScreenSize();
    useEffect(()=>{
                setTimeout(()=>{
                           setFadeOut(true);
                },2500);
    },[]);
    useEffect(()=>{
        if(fadeOut){
         setTimeout(()=>{
                setHideIntro(true);
         },1500);
        }
    },[fadeOut]);
    return (
        <>
        {
            !hideIntro  && (
                <div className={` ${fadeOut ? "animate-fade-out":""} ${isMobile ? "w-full justify-center items-center":""} ${isTablet ? "w-1/2 gap-y-6 justify-center items-center":""} ${isDesktopOrLaptop ? "w-1/3 gap-y-12 justify-around items-center":""} w-full h-screen overflow-hidden flex flex-col z-20`}>
                <div className="flex justify-center items-center text-center bg-gray-100">
         <h1 className="text-2xl font-bold text-gray-800 shadow-lg p-6 bg-white rounded-lg border border-gray-300 animate-shake">
             ETHIOPIAN DATE CONVERTER
         </h1>
     </div>
             <div className={` ${isMobile || isTablet ? "w-80 h-80":""} ${isDesktopOrLaptop ? "w-80 h-80":""} relative animate-shake`}>
                 <img 
                     src={icon} 
                     className='w-full h-full absolute top-0 left-0 object-cover' 
                     alt="" 
                 />
             </div>
         </div>
            )
        }
       </>
    );
};

export default  IntroCalender;