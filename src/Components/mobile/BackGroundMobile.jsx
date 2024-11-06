import React from 'react';
import flag from '../../assets/pictures/ethio2.png';
import flagDesktop from '../../assets/pictures/premium_photo-1674591173440-e559d2f73dc4.png';
import { useEffect,useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ScreenSize from './ScreenSize';

const  BackGroundMobile = ({finishedBack}) => {
    const [imageFullLoad,setImageFullLoad]=useState(false);
    const [showSecond,setShowSecond]=useState(false);
    const {isDesktopOrLaptop,isMobile,isTablet}=ScreenSize();
    

    useEffect(()=>{
         console.log( "isDEsktop",  isDesktopOrLaptop);
         console.log( "isTablet", isTablet);
         console.log("isMobile ",isMobile);
    },[]);
      useEffect(()=>{
              

             if(imageFullLoad){
                     setTimeout(()=>{
                        setShowSecond(true);
                     },1000);
             }
      },[imageFullLoad]);
      useEffect(()=>{
                if(showSecond){
                   finishedBack();
                }
      },[showSecond]);
    const handleLoad=()=>{
        console.log("image loaded now");
        setImageFullLoad(true);
        
    }

    return (
      <> 
                 {
                  isMobile && (
                     <div className='absolute inset-0'
                     >
                        <div className='absolute w-full h-1/2 bg-gray-200 opacity-30 z-10'>
            
                        </div>
                       <img 
                          onLoad={handleLoad} 
                       src={flag} className='w-full h-full' alt="" />
                     </div>
                  )
                 }
                 {
                  isTablet && (
                     <div className='absolute inset-0'
                     >
                        <div className='absolute w-full h-1/2 bg-gray-200 opacity-30 z-10'>
            
                        </div>
                       <img 
                          onLoad={handleLoad} 
                       src={flag} className='w-full h-full' alt="" />
                     </div>
                  )
                 }
                 {
                  isDesktopOrLaptop  && (
                     <div className='absolute inset-0'
                     >
                        <div className='absolute w-full h-1/2 bg-gray-200 opacity-30 z-10'>
            
                        </div>
                       <img 
                          onLoad={handleLoad} 
                       src={flagDesktop} className='w-full h-full' alt="" />
                     </div>
                  )
                 }
      
         </>
    );
};

export default  BackGroundMobile;