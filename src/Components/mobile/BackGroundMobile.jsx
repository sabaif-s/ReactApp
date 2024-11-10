import React from 'react';

 
import { useEffect,useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ScreenSize from './ScreenSize';
 
// import BackGroundAsset from './BackGroundAsset';
const  BackGroundMobile = ({backPics,finishedBack,changeImage,newImage}) => {
    const [imageFullLoad,setImageFullLoad]=useState(false);
    const [showSecond,setShowSecond]=useState(false);
    const {isDesktopOrLaptop,isMobile,isTablet}=ScreenSize();
    const [firstImage,setFirstImage]=useState(true);
    const [newSettedImage,setNewSettedImage]=useState("");
    const [fadeOutFirst,setFadeOutFirst]=useState(false);
    const [fadeOutSecond,setFadeOutSecond]=useState(false);
    const [currentImage,setCurrentImage]=useState(0);
    const [fadeInSecond,setFadeInSecond]=useState(false);
   //  const {pictureLoaded,allPicturesLoaded,assetPicMonth,backAssetPic}=BackGroundAsset();


    useEffect(()=>{

      if(changeImage && newImage != ""){
           setFadeOutFirst(true);
           setCurrentImage(prev => prev + 1);
           setTimeout(()=>{
                     setNewSettedImage(newImage);
                    
           },1700);
         
      }
    },[newImage,changeImage]);
    useEffect(()=>{
       if(fadeOutSecond){
         setTimeout(()=>{
            setFadeOutSecond(false);
            setFadeInSecond(true);
         },1700);
       }
    },[fadeOutSecond]);
    useEffect(()=>{
         if(fadeInSecond){
            setTimeout(()=>{
                 setFadeInSecond(false);
            },1000);
         }
    },[fadeInSecond]);
   //  useEffect(()=>{
   //   if(pictureLoaded && !allPicturesLoaded){
   //    console.log("picture loaded but not all");
   //   }
   //   else if(pictureLoaded && allPicturesLoaded){
   //    console.log("both loaded");
   //   }
   //   else{
   //    console.log("picture not loads");
   //   }
   //  },[pictureLoaded,allPicturesLoaded]);
    
    useEffect(()=>{
       if(currentImage > 1){
         setFadeOutSecond(true);
         setTimeout(()=>{
               setFadeOutSecond(false);
         },1700);
         setTimeout(()=>{
                 setFadeInSecond(true);
         },1500);
       }
    },[currentImage]);
        
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
         true && (
            <>
            {
             isMobile && (
                <div className='absolute inset-0'
                >
                   <div className='absolute w-full h-1/2 bg-gray-200 opacity-30 z-10'>
       
                   </div>
                  <img 
                     
                     onLoad={handleLoad} 
                  src={backPics[0].src} className={`animate-fade-in w-full h-full` }alt="" />
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
                     loading="lazy" 
                  src={backPics[0].src} className='animate-fade-in w-full h-full' alt="" />
                </div>
             )
            }
            {
             isDesktopOrLaptop  && (
                <div className={`absolute inset-0 ${fadeInSecond ? "animate-fade-in":""} ${fadeOutSecond ? "animate-fade-out":""}`}
                >
                   <div className='absolute w-full h-1/2 bg-gray-200 opacity-30 z-10'>
       
                   </div>
                   {
                      newSettedImage != '' && (
                         <img 
                         onLoad={handleLoad} 
                         loading="lazy" 
                      src={newSettedImage} className='animate-fade-in w-full h-full' alt="" />
                   )
                   }
                   {
                      newSettedImage == '' && (
                         <img 
                         onLoad={handleLoad} 
                         loading="lazy" 
                      src={backPics[1].src} className={` ${fadeOutFirst ? "animate-fade-out":"animate-fade-in-half"} w-full h-full`} alt="" />
                      )
                   }
                 
                </div>
             )
            }
            </>
         )
      }
   
      
         </>
    );
};

export default  BackGroundMobile;