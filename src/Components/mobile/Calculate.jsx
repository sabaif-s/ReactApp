import React from 'react';
import EthiopianCalendar from "ethiopian-calendar-converter";
import { useEffect,useState } from 'react';
const ComponentName = (gregorian,ethiopianDateToConvert) => {
    const [calculatedResult,setCalculatedResult]=useState(0);
    const [calculatedResultEthiopia,setCalculatedResultEthiopia]=useState(0);

    useEffect(()=>{
        const gregorianDate = "2002-10-05";
       
        if(gregorian != ""){
            const etCalendar = new EthiopianCalendar(gregorian);
            const ethiopianDate = etCalendar.convertToEthiopian().date;
            console.log(ethiopianDate);
            setCalculatedResult(ethiopianDate);
        }
    },[gregorian]);
    useEffect(()=>{
         
       
        if(ethiopianDateToConvert != ""){
            const etCalendar = new EthiopianCalendar(ethiopianDateToConvert);
const gregorianDate = etCalendar.convertToGregorian().date;
console.log(gregorianDate)
             
            setCalculatedResultEthiopia(gregorianDate);
        }
    },[ethiopianDateToConvert]);
    

    return {calculatedResult,calculatedResultEthiopia}
};

export default ComponentName;