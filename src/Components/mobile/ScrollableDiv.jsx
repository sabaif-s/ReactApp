import React from 'react';

const ScrollableYearSelector = ({sendSelectedYear,sendHideEthiopiaCalender}) => {
    const currentYear = new Date().getFullYear();
    const numberOfYears = 100; // Total years to display (15 past + 15 future)
    const years = Array.from(
        { length: numberOfYears },
        (_, index) => currentYear - Math.floor(numberOfYears / 2) + index
    );

    return (
        <div className="h-full w-full flex justify-center items-start">
            <div className="h-full w-1/2 overflow-y-scroll bg-white border border-gray-300 flex flex-col">
                {/* This empty div will help position the content from the center */}
                <div className="flex-grow flex flex-col-reverse relative">
                    {years.map((year, index) => (
                        <div
                         onClick={()=>{
                            sendSelectedYear(year);
                            sendHideEthiopiaCalender();
                         }}
                        key={index} className={` ${year == 2017  ? "sticky top-0 z-10 w-full bg-green-300":"bg-blue-200"} p-4 border-b border-gray-200 text-center rounded-xl`}>
                            {year}
                        </div>
                    ))}
                </div>
               
            </div>
        </div>
    );
};

export default ScrollableYearSelector;