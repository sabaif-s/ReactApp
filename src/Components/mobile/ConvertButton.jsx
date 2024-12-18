import React, { useState, useEffect, useRef } from 'react';
import { ET, US } from 'country-flag-icons/react/3x2';
import ScreenSize from './ScreenSize';
import firstImage from '../../assets/pictures/ethio2_11zon.jpg';
 

const ConvertButton = React.memo(
  ({
    calenderSelected,
    gregorianDate,
    ethiopianDate,
    showCurrentCalender,
    fromGregorianToEthiopia,
    changeDesktopImage,
    hideBothCalender,
    assetPicMonth
  }) => {
    const [fromClicked, setFromClicked] = useState(false);
    const [toClicked, setToClicked] = useState(false);
    const [fromText, setFromText] = useState('FROM');
    const [toText, setToText] = useState('TO');
    const [animateInComponent, setAnimateInComponent] = useState(false);
    const [reduceOpacity, setReduceOpacity] = useState(false);
    const [showImageBackGround, setShowImageBackGround] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [animateFadeOut, setAnimateFadeOut] = useState(false);
    const [animateFadeIn, setAnimateFadeIn] = useState(false);

    const refDiv = useRef(null);
    const { isDesktopOrLaptop, isMobile, isTablet } = ScreenSize();
   

    const ETHIOPIAN_MONTH_NAMES = [
      'መስከረም',
      'ጥቅምት',
      'ህዳር',
      'ታህሳስ',
      'ጥር',
      'የካቲት',
      'መጋቢት',
      'ሚያዛ',
      'ግንቦት',
      'ሰኔ',
      'ሃምሌ',
      'ነሃሴ',
      'ፗጉሜ',
    ];
    const GREGORIAN_MONTH_NAMES = [
      'JANUARY',
      'FEBRUARY',
      'MARCH',
      'APRIL',
      'MAY',
      'JUNE',
      'JULY',
      'AUGUST',
      'SEPTEMBER',
      'OCTOBER',
      'NOVEMBER',
      'DECEMBER',
    ];

    // Close dropdown on outside click
    const handleClickOutside = (event) => {
      if (refDiv.current && !refDiv.current.contains(event.target)) {
        setFromClicked(false);
        setToClicked(false);
      }
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Initial animation
    useEffect(() => {
      setTimeout(() => setAnimateInComponent(true), 3500);
    }, []);

    // Fade-in and fade-out logic
    useEffect(() => {
      if (animateInComponent) {
        setTimeout(() => setReduceOpacity(true), 1500);
      }
    }, [animateInComponent]);

    useEffect(() => {
      if (animateFadeOut) {
        setTimeout(() => {
          setAnimateFadeOut(false);
          setAnimateFadeIn(true);
        }, 500);
      }
    }, [animateFadeOut]);

    useEffect(() => {
      if (animateFadeIn) {
        setTimeout(() => setAnimateFadeIn(false), 1500);
      }
    }, [animateFadeIn]);

    // Date processing
    useEffect(() => {
      console.log("ethiopian date:",ethiopianDate);
      console.log("gregorian date:",gregorianDate);
      if (ethiopianDate && gregorianDate) {
        setShowImageBackGround(true);

        const ethiopianParts = ethiopianDate.split('-');
        const gregorianParts = gregorianDate.split('-');

        const ethiopianMonth = ETHIOPIAN_MONTH_NAMES[parseInt(ethiopianParts[1], 10) - 1];
        const gregorianMonth = GREGORIAN_MONTH_NAMES[parseInt(gregorianParts[1], 10) - 1];

        setAnimateFadeOut(true);
        setTimeout(() => {
          const imageSrc = assetPicMonth[parseInt(ethiopianParts[1], 10) - 1]?.src || firstImage;
          console.log("image src:",imageSrc);
          setSelectedImage(imageSrc);
          changeDesktopImage(imageSrc);
        }, 500);

        if (fromGregorianToEthiopia) {
          setToText(`አመት: ${ethiopianParts[0]}, ወር: ${ethiopianMonth}, ቀን: ${ethiopianParts[2]}`);
          setFromText(`Year: ${gregorianParts[0]}, Month: ${gregorianMonth}, Day: ${gregorianParts[2]}`);
        } else {
          setFromText(`አመት: ${ethiopianParts[0]}, ወር: ${ethiopianMonth}, ቀን: ${ethiopianParts[2]}`);
          setToText(`Year: ${gregorianParts[0]}, Month: ${gregorianMonth}, Day: ${gregorianParts[2]}`);
        }
      }
    }, [ethiopianDate, gregorianDate]);

    return (
      <>
        {animateInComponent && (
          <div
            className={`${
              reduceOpacity ? 'opacity-95' : 'animate-fade-in'
            } ${isDesktopOrLaptop ? 'w-1/3' : ''} ${
              isMobile ? 'w-full' : ''
            } ${isTablet ? 'w-2/3' : ''} absolute bottom-0 h-1/2 ${
              showImageBackGround ? '' : 'bg-red-300'
            } flex justify-center items-start mt-4 cursor-pointer`}
          >
            {showImageBackGround && (
              <img
                onClick={() => {
                  hideBothCalender();
                  console.log('Background clicked');
                }}
                src={selectedImage || firstImage}
                className={`${
                  animateFadeIn ? 'animate-fade-in' : ''
                } ${false ? 'animate-fade-out' : ''} w-full h-full absolute  bottom-0`}
                alt="Background"
              />
            )}
            <div className="w-full flex justify-around items-start p-4 rounded-lg shadow-lg z-10">
              {/* From Dropdown */}
              <div ref={refDiv} className="flex flex-col items-center justify-start w-full">
                <button
                  className="bg-white w-full text-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => setFromClicked(!fromClicked)}
                >
                  {fromText}
                </button>
                {fromClicked && (
                  <div className="mt-2 flex flex-col items-center w-full text-center text-2xl">
                    <div
                      onClick={() => {
                        setFromText('EC');
                        setToText('GC');
                        calenderSelected('ethiopia');
                        showCurrentCalender();
                        setFromClicked(false);
                      }}
                      className="w-full flex gap-x-2 justify-center items-center bg-white rounded-lg p-2"
                    >
                      <ET title="Ethiopia" className="w-8 h-8" />
                      <span className="w-2/3 text-green-400 px-2 py-1 rounded-lg bg-blue-100">EC</span>
                    </div>
                    <div
                      onClick={() => {
                        setFromText('GC');
                        setToText('EC');
                        calenderSelected('gregorian');
                        showCurrentCalender();
                        setFromClicked(false);
                      }}
                      className="w-full flex gap-x-2 justify-center items-center bg-white rounded-lg p-2"
                    >
                      <US title="United States" className="w-8 h-8" />
                      <span className="w-2/3 text-green-400 px-2 py-1 rounded-lg bg-blue-100">GC</span>
                    </div>
                  </div>
                )}
              </div>

              {/* To Dropdown */}
              <div className="flex flex-col items-center justify-start w-full">
                <button
                  className="bg-white w-full text-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => setToClicked(!toClicked)}
                >
                  {toText}
                </button>
                {toClicked && (
                  <div className="mt-2 flex flex-col items-center w-full text-center text-2xl">
                    {(fromText === 'FROM' || fromText === 'GC') && (
                      <div
                        onClick={() => {
                          setToText('EC');
                          setToClicked(false);
                        }}
                        className="w-full flex gap-x-2 justify-center items-center bg-white rounded-lg p-2"
                      >
                        <ET title="Ethiopia" className="w-8 h-8" />
                        <span className="w-2/3 text-green-400 px-2 py-1 rounded-lg bg-blue-100">EC</span>
                      </div>
                    )}
                    {(fromText === 'FROM' || fromText === 'EC') && (
                      <div
                        onClick={() => {
                          setToText('GC');
                          setToClicked(false);
                        }}
                        className="w-full flex gap-x-2 justify-center items-center bg-white rounded-lg p-2"
                      >
                        <US title="United States" className="w-8 h-8" />
                        <span className="w-2/3 text-green-400 px-2 py-1 rounded-lg bg-blue-100">GC</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);

export default ConvertButton;
