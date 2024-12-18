import React from 'react';
import { useEffect,useState } from 'react';
import ScreenSize from '../mobile/ScreenSize';
const  LoadingImages = () => {
       
    const [animateInDeveloped,setAnimateInDevelopedIn]=useState(false);
    const [animateUpDeveloped,setAnimateUpDeveloped]=useState(false);
    const [animateInName,setAnimateInName]=useState(false);
    const [animateDownName,setAnimateDownName]=useState(false);
    const [hideText,setHideText]=useState(true);
    const {isDesktopOrLaptop,isMobile,isTablet}=ScreenSize();
    const [animateOutAll,setAnimateOutAll]=useState(false);
    const [loadedImages,setLoadedImage]=useState(0);
    const [readyRender,setReadyToRender]=useState(false);
    
    useEffect(()=>{
       setTimeout(()=>{
         setAnimateInDevelopedIn(true);
         setHideText(false);
       },500);
    },[]);
    useEffect(()=>{
             if(loadedImages >= 2){
              setReadyToRender(true);
             }
    },[loadedImages]);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setAnimateOutAll(true);
    //     },6300);
    //      console.log("loading mounted");
    // },[]);
    useEffect(()=>{
      if(animateInDeveloped){
        setTimeout(()=>{
           setAnimateUpDeveloped(true);
        },1500);
      }
    },[animateInDeveloped]);
    useEffect(()=>{
        if(animateUpDeveloped){
          setTimeout(()=>{
             setAnimateInName(true);
          },1000);
        }
      },[animateUpDeveloped]);
      useEffect(()=>{
        if(animateInName){
          setTimeout(()=>{
             setAnimateDownName(true);
          },1000);
        }
      },[animateInName]);
    return (
        <>
        {
            !isDesktopOrLaptop && (
                <div className={` ${animateOutAll ? "animate-fade-out":""} ${readyRender ? "opacity-100":"opacity-0"} w-full h-screen flex justify-around items-end relative overflow-hidden`}>
                <div className='w-full h-1/2 flex justify-center items-center bg-black bg-opacity-50' >
                     <img 
                      onLoad={()=>{
                        setLoadedImage((prev)=> prev + 1);
                      }}
                     src="/ReactApp/Pulse@1x-1.0s-200px-200px (1).gif" className='animate-fade-in' alt="" />
                </div>
                <div className='absolute top-0 w-full h-1/2 flex justify-center items-center'>
     <img
      onLoad={()=>{
        setLoadedImage((prev)=> prev + 1);
      }}
     src="/ReactApp/sabk.jpeg" className='w-full h-full object-cover' alt="Background" />
     <div  className={`  absolute inset-0 flex flex-col justify-center items-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg p-4`}>
 
   
     <span 
        className={`${hideText ? "hidden":""} ${animateInDeveloped  ? "animate-fade-in":""}  ${animateUpDeveloped  ? "animate-slide-up":""}`}
     >
         DEVELOPED BY 
         </span>
         <br />
         <span className={` ${animateInName ? "animate-fade-in":"opacity-0"} ${animateDownName ? "animate-slide-down":""} `}  >
         SEBAIF MUHAMMED
         </span>
         
   
     </div>
 </div>
             </div>
            )
        }
        {
            isDesktopOrLaptop && (
                <div className={` ${animateOutAll ? "animate-fade-out":""} ${readyRender ? "opacity-100":"opacity-0"}  w-full h-screen flex justify-around items-end relative overflow-hidden `}>
                    <img
                    onLoad={()=>{
                      setLoadedImage((prev)=> prev + 1);
                    }}
                    src="/ReactApp/48421_6_11zon.jpg" className='w-full h-full absolute animate-fade-in' alt="" />
                <div className='w-1/4 h-1/2 flex justify-center items-center' >
                     <img 
                      onLoad={()=>{
                        setLoadedImage((prev)=> prev + 1);
                      }}
                     src="/ReactApp/Pulse@1x-1.0s-200px-200px (1).gif" className='animate-fade-in w-full ' alt="" />
                </div>
                <div className='absolute top-0 w-1/3 h-1/2 flex justify-center items-center '>
                <div className='w-full bg-black absolute z-20'>
                <img 
                 onLoad={()=>{
                  setLoadedImage((prev)=> prev + 1);
                }}
                src="/ReactApp/sabk.jpeg" className='w-full h-full z-10 opacity-50  object-cover' alt="Background" />
                </div>
   
     <div  className={`  absolute inset-0 flex flex-col justify-center items-center text-white text-2xl font-bold z-30   rounded-lg p-4`}>
 
   
     <span 
        className={`${hideText ? "hidden":""} ${animateInDeveloped  ? "animate-fade-in":""}  ${animateUpDeveloped  ? "animate-slide-up":""}`}
     >
         DEVELOPED BY 
         </span>
         <br />
         <span className={` ${animateInName ? "animate-fade-in":"opacity-0"} ${animateDownName ? "animate-slide-down":""} `}  >
         SEBAIF MUHAMMED
         </span>
         
   
     </div>
 </div>
             </div>
            )
        }
      
            </>
    );
};

export default  LoadingImages;