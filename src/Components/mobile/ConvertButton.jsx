import React from 'react';
import { useState,useEffect,useRef } from 'react';
import { ET,US } from 'country-flag-icons/react/3x2'
import ScrollableYearSelector from './ScrollableDiv';
import ScreenSize from './ScreenSize';
import ComponentName from './Calculate';const  ConvertButton = ({calenderSelected,fromTrack,gregorianDate,ethiopianDate,fromEthiopianToGregorian,fromGregorianToEthiopia}) => {
    const [fromClicked,setFromClicked]=useState(false);
    const [toClicked,setToClicked]=useState(false);
    const [ecClickedFrom,setEcClickedFrom]=useState(false);
    const [gcClickedFrom,setGcClickedFrom]=useState(false);
    const [ecClickedTo,setEcClickedTo]=useState(false);
    const [gcClickedTo,setGcClickedTo]=useState(false);
    const [fromText,setFromText]=useState("FROM");
    const [toText,setToText]=useState("TO");
    const [animateInComponent,setAnimateInComponent]=useState(false);
    const [reduceOpacity,setReduceOpacity]=useState(false);
    const refDiv = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const {isDesktopOrLaptop,isMobile,isTablet}=ScreenSize();

    const handleClickOutside = (event) => {
        // Check if the click is outside the component
        if (refDiv.current && !refDiv.current.contains(event.target)) {
            setIsVisible(false);
            setFromClicked(false);
            // calenderSelected("outside");
        }
    };

  

    const ETHIOPIAN_MONTH_NAMES = [
        "መስከረም",
        "ጥቅምት",
        "ህዳር",
        "ታህሳስ",
        "ጥር",
        "የካቲት",
        "መጋቢት",
        "ሚያዛ",
        "ግንቦት",
        "ሰኔ",
        "ሃምሌ",
        "ነሃሴ",
        "ፗጉሜ",
      ];

      useEffect(() => {
        // Add event listener to the document
        document.addEventListener('mousedown', handleClickOutside);
        
        // Clean up the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
      useEffect(()=>{
                  setTimeout(()=>{
                     setAnimateInComponent(true);
                  },3500);
      },[]);
      useEffect(()=>{
          if(animateInComponent){
            setTimeout(()=>{
                setReduceOpacity(true);
         },1500);
          }
              
      },[animateInComponent]);
useEffect(()=>{
   if(ethiopianDate != ""){
    const dateParts = ethiopianDate.split('-');
    const dataPartsGreg=gregorianDate.split('-');
    // Output the result
    console.log(dateParts); // ["1995", "1", "25"]
    const yearGreg=dataPartsGreg[0];
    // Accessing individual parts
    const year = dateParts[0];  // "1995"
    const month = ETHIOPIAN_MONTH_NAMES[(parseInt(dateParts[1])-1)]; 
     const monthGreg=dataPartsGreg[1];
    // "1"
    const day = dateParts[2];  
    const dayGreg=dataPartsGreg[2];
    console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
    if(fromGregorianToEthiopia){
        setToText(`Year: ${year}, Month: ${month}, Day: ${day}`);
        setFromText(`Year: ${yearGreg}, Month: ${monthGreg}, Day: ${dayGreg}`);
    }
    else{
        setToText(`Year: ${yearGreg}, Month: ${monthGreg}, Day: ${dayGreg}`);
        setFromText(`Year: ${year}, Month: ${month}, Day: ${day}`);
    }
   }
},[ethiopianDate,gregorianDate]);
// useEffect(()=>{
//     if(gregorianDate != ""){
//      const dateParts = gregorianDate.split('-');
 
//      // Output the result
//      console.log(dateParts); // ["1995", "1", "25"]
     
//      // Accessing individual parts
//      const year = dateParts[0];
//      const month=dateParts[1];
//      const monthEthio = ETHIOPIAN_MONTH_NAMES[(parseInt(dateParts[1])-1)]; 
//      // "1995"
//     //  const month = ETHIOPIAN_MONTH_NAMES[(parseInt(dateParts[1])-1)];  // "1"
//      const day = dateParts[2];  
//      console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
//      if(fromEthiopianToGregorian){
//         setFromText(`Year: ${year}, Month: ${monthEthio}, Day: ${day}`);
//      }
//      else{
//         setFromText(`Year: ${year}, Month: ${month}, Day: ${day}`);
//      }
     
//     }
//  },[gregorianDate]);
 
     
    return (
        <>
           {
            animateInComponent && (
                <div className={` ${reduceOpacity ? "opacity-95":"animate-fade-in"} ${isDesktopOrLaptop ? "w-2/3":""} ${isMobile ? "w-full":""} ${isTablet ? "w-1/2":""} absolute bottom-0 h-1/2 bg-red-300 flex justify-center items-start mt-4`}>
                <div className='w-full  flex justify-around items-start p-4 rounded-lg shadow-lg'>
                    <div
                    ref={refDiv}
                    className='flex flex-col items-center justify-start w-full'>
                        <button 
                            className='bg-white w-full text-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105'
                            onClick={() => {
                                setFromClicked(!fromClicked);
                                fromTrack();
        
                            } }
                        >
                            {fromText}
                        </button>
                        {fromClicked && (
                            <div className='mt-2 flex flex-col items-center w-full text-center text-2xl'>
                                {
                                    (true) && (
                                        <div
                                        onClick={()=>{
                                           setEcClickedFrom(true);
                                           setFromText("EC");
                                           calenderSelected("ethiopia");
                                           setToText("GC");
                                           setFromClicked(!fromClicked);
                                        }}
                                       className='w-full flex gap-x-2 justify-center items-center bg-white rounded-lg p-2'>
                                       <ET title="Ethiopia" className="w-8 h-8"/>
                                       <span className='w-2/3 text-green-400 px-2 py-1 rounded-lg bg-blue-100'>EC</span>
                                       
                                       </div>
                                    )
                                }
                                {
                                    (true) && (
                                             
                                <div
                                onClick={()=>{
                                   setGcClickedFrom(true);
                                   setFromText("GC");
                                   calenderSelected("gregorian");
                                   setToText("EC");
                                   setFromClicked(!fromClicked);
                                }}
                               className='w-full flex gap-x-2 justify-center items-center bg-white rounded-lg p-2'>
                               <US title="United States" className="w-8 h-8"/>
                               <span className='w-2/3 text-green-400 px-2 py-1 rounded-lg bg-blue-100'>GC</span>
                               
                               </div>
                                    )
                                }
                              
                            </div>
                        )}
                    </div>
                    <div className='flex flex-col items-center justify-start w-full'>
                        <button 
                            className='bg-white w-full text-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105'
                            onClick={() => setToClicked(!toClicked)}
                        >
                            {toText}
                        </button>
                        {toClicked && (
            <div className='mt-2 flex flex-col items-center w-full text-center text-2xl'>
                { (fromText === "FROM" || fromText === "GC") && (
                    <div
                        onClick={() => {
                            setEcClickedTo(true);
                            setToText("EC");
                            setToClicked(!toClicked);
                        }}
                        className='w-full flex gap-x-2 justify-center items-center bg-white rounded-lg p-2'
                    >
                        <ET title="Ethiopia" className="w-8 h-8" />
                        <span className='w-2/3 text-green-400 px-2 py-1 rounded-lg bg-blue-100'>EC</span>
                    </div>
                )}
                { (fromText === "FROM" || fromText === "EC") && (
                    <div
                        onClick={() => {
                            setGcClickedTo(true);
                            setToText("GC");
                            setToClicked(!toClicked);
                        }}
                        className='w-full flex gap-x-2 justify-center items-center bg-white rounded-lg p-2'
                    >
                        <US title="United States" className="w-8 h-8" />
                        <span className='w-2/3 text-green-400 px-2 py-1 rounded-lg bg-blue-100'>GC</span>
                    </div>
                )}
            </div>
        )}
                    </div>
                </div>
            </div>
            )
           }
       
    </>
    );
};

export default  ConvertButton;