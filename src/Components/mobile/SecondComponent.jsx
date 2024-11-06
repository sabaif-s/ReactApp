import React from 'react';
import { useState,useEffect } from 'react';
import Datepicker from "tailwind-datepicker-react"
import icon from '../../assets/pictures/icons8-calendar-96.png';
const CalendarIcon = () => (
    <img src={icon} className='w-20 h-20' alt="" />
    // <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     className="h-5 w-5 mr-2 text-gray-600" // Adjust size and color as needed
    //     fill="none"
    //     viewBox="0 0 24 24"
    //     stroke="currentColor"
    // >
    //     <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M8 7V3m8 4V3m-4 18H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v16a2 2 0 01-2 2h-7"
    //     />
    // </svg>
);
const  GregorianCalender = ({sendGregorianData}) => {
    useEffect(()=>{
             setTimeout(()=>{
                 setShow(true);
             },500);
    },[]);
    const [show, setShow] = useState(false);
	const [selectedDate, setSelectedDate] = useState("");
	const handleChange = (selectedData) => {
        console.log(selectedData); 
         setSelectedDate(selectedData);
         sendGregorianData(selectedData);
        // Logs the selected date
      };
    
      const handleClose = (state) => {
        setShow(state); // Updates the show state
      };
    const options = {
        title: "Demo Title",
        autoHide: true,
        todayBtn: false,
        clearBtn: true,
        clearBtnText: "Clear",
        maxDate: new Date("2030-01-01"),
        minDate: new Date("1950-01-01"),
        theme: {
            background: "bg-yellow-100 dark:bg-gray-800",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: "bg-orange-500",
            input: "",
            inputIcon: "",
            selected: "",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span>Previous</span>,
            next: () => <span>Next</span>,
        },
        datepickerClassNames: "top-0 left-10",
        defaultDate: new Date("2022-01-01"),
        language: "en",
        disabledDates: [],
        weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        inputNameProp: "date",
        inputIdProp: "date",
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }
    return (
        <div className='absolute w-full h-1/2 animate-slide-down z-20 flex flex-col justify-center items-center'>
             <CalendarIcon /> {/* Calendar Icon */}
           <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} classNames='animate-fade-in' >
                <div className="flex flex-col justify-center bg-red-400 items-center animate-fade-in">
                   
                    {/* <input 
                        type="text" 
                        className="w-full border p-2 rounded" 
                        placeholder="Select Date" 
                        value={selectedDate} 
                        onFocus={() => setShow(true)} 
                        readOnly 
                    /> */}
                </div>
            </Datepicker>

        </div>
    );
};

export default  GregorianCalender;