import React from 'react';
import { useEffect,useState } from 'react';
import ScrollableYearSelector from './ScrollableDiv';
import ScreenSize from './ScreenSize';
function EthiopianCalendar({sendEthiopiaDate}){
       const [monthSelected,setMonthSelected]=useState(false);
       const [daySelected,setDaySelected]=useState(false);
       const days = Array.from({ length: 30 }, (_, index) => index + 1);
       const daysPaguame = Array.from({ length: 6 }, (_, index) => index + 1);
       const [dateEthiopia,setDateEthiopia]=useState("");
       const [selectedDate,setSelectedDate]=useState("");
       const [selectedMonth,setSelectedMonth]=useState("");
       const [selectedYear,setSelectedYear]=useState("");
       const [hideEthioCalender,setHideEthioCalender]=useState(false);
       const [paguameSelected,setPaguameSelected]=useState(false);
       const {isDesktopOrLaptop,isMobile,isTablet}=ScreenSize();
       useEffect(()=>{
                if(selectedYear != ""){
                    const formattedDate=selectedYear+"-"+selectedMonth+"-"+selectedDate;
                    console.log("ethiopian date: ",String(formattedDate));
                    setDateEthiopia(formattedDate);
                }
       },[selectedYear]);

       useEffect(()=>{
              if(dateEthiopia != ""){
                sendEthiopiaDate(dateEthiopia);
              }
       },[dateEthiopia]);
       useEffect(()=>{
           if(selectedMonth == 13){
            setPaguameSelected(true);
           }
       },[selectedMonth]);
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

      function saveSelectedYear(years){
        setSelectedYear(years);
      }
      function hideCalender(){
        setHideEthioCalender(true);
      }
    return (
        <div className={` ${hideEthioCalender ? "hidden":""} ${isDesktopOrLaptop ? "w-1/3 justify-center":""} ${isMobile ? "w-full justify-center":""}  ${isTablet ? "w-1/2 justify-center":""} cursor-pointer flex items-center h-1/3 absolute top-10 z-50`} >
                    <div className={`w-full h-full flex justify-center  items-center `} >
                    {
                        !monthSelected && (
                            <div className='h-full flex flex-col justify-start items-center overflow-y-scroll w-1/2 bg-white text-green-300'>
                            {
      ETHIOPIAN_MONTH_NAMES.map((item, index) => {
          return (
              <span
              onClick={()=>{
                  console.log("clicked", index);
                  setSelectedMonth(index + 1);
                  setMonthSelected(!monthSelected);
              }}
               className='w-full text-center border-green-300 p-4 border-4 rounded-lg'
              key={index}>{item}  {index + 1} </span>
          );
      })
  }
                            </div>
                        ) 
                    }
                     {
                        monthSelected && !daySelected && paguameSelected && (
                            <div className='h-full flex flex-col justify-start items-center overflow-y-scroll w-1/2 bg-white text-red-300'>
                                  
                                       {
                                        
                                        daysPaguame.map((item,index)=>{
                                            return(
                                                <span
              onClick={()=>{
                  console.log("clicked", index);
                  setSelectedDate(item);
                  setDaySelected(!daySelected);
              }}
               className='w-full text-center text-2xl border-green-300 p-4 border-4 rounded-lg'
              key={index}>{item} </span>
                                            )
                                        })
                                       }
                                       
                            </div>
                        )
                    }
                    {
                        monthSelected && !daySelected && !paguameSelected && (
                            <div className='h-full flex flex-col justify-start items-center overflow-y-scroll w-1/2 bg-white text-red-300'>
                                  
                                       {
                                        
                                        days.map((item,index)=>{
                                            return(
                                                <span
              onClick={()=>{
                  console.log("clicked", index);
                  setSelectedDate(item);
                  setDaySelected(!daySelected);
              }}
               className='w-full text-center text-2xl border-green-300 p-4 border-4 rounded-lg'
              key={index}>{item} </span>
                                            )
                                        })
                                       }
                                       
                            </div>
                        )
                    }
                     {
                        daySelected && (
                            <div className='w-full h-full'>
                             <ScrollableYearSelector sendSelectedYear={saveSelectedYear} sendHideEthiopiaCalender={hideCalender} />
                            </div>
                            
                        )
                     }
                   
                         
                    </div>
        </div>
    )
}

 

export default  EthiopianCalendar;