import { useEffect,React,useState } from "react";
import BackGroundAsset from "./Components/mobile/BackGroundAsset";
import BackGroundMobile from "./Components/mobile/BackGroundMobile";
import GregorianCalender from "./Components/mobile/SecondComponent";
import ConvertButton from "./Components/mobile/ConvertButton";
// import ComponentName from "./Components/mobile/Calculate";
import EthiopianCalendar from "./Components/mobile/EthiopianCalender";
import ComponentName from "./Components/mobile/Calculate";
import IntroCalender from "./Components/mobile/IntroCalender";
import ScreenSize from "./Components/mobile/ScreenSize";
import LoadingImages from "./Components/loading/LoadingMobile";
function App() {
 
  
             const [finishBack,setFinishBack]=useState(false);
             const [calenderSelected,setCalenderSelected]=useState("");
             const [showEthCalender,setShowEthCalender]=useState(false);
             const [showGregorianCalender,setShowGregorianCalender]=useState(false);
             const [fromClicked,setFromClicked]=useState(0);
             const [gregorianDate,setGregorianDate]=useState("");
             const [ethiopianDateToConvert,setEthiopianDateToConvert]=useState("");
             const {calculatedResult,calculatedResultEthiopia}=ComponentName(gregorianDate,ethiopianDateToConvert);
             const [ethiopianDate,setEthiopianDate]=useState("");
             const [fromGregToEthio,setFromGregToEthiopia]=useState(false);
             const [fromEthioToGreg,setFromEthioToGreg]=useState(false);
             const [showIntroCalender,setShowIntroCalender]=useState(false);
             const {isDesktopOrLaptop,isMobile,isTablet}=ScreenSize();
             const [changeImage,setChangeImage]=useState(false);
             const [newSetImage,setNewSetImage]=useState("");
             const {pictureLoaded,allPicturesLoaded,assetPicMonth,backAssetPic}=BackGroundAsset();
             const [readyToRender,setReadyToRender]=useState(false);
             const [showCurrentCalender,setShowCurrentCalender]=useState(0);
             const [showLoading,setShowLoading]=useState(false);
             useEffect(()=>{
                  if(finishBack){
                    console.log("finished back");
                    setFinishBack(true);
                  }
             },[finishBack]);
             useEffect(()=>{
                  
             },[gregorianDate,ethiopianDate]);
             useEffect(()=>{
                    console.log("calculated result",calculatedResult);
                    setEthiopianDate(calculatedResult);
             },[calculatedResult]);
             useEffect(()=>{
                  if(showGregorianCalender){
                    setShowEthCalender(false);
                  }
             },[showGregorianCalender]);
             useEffect(()=>{
              if(showEthCalender){
                setShowGregorianCalender(false);
              }
         },[showEthCalender]);
             useEffect(()=>{
                      if(calculatedResultEthiopia != ""){
                        setGregorianDate(calculatedResultEthiopia);
                         console.log("calculated result ethiopia ",calculatedResultEthiopia);
                      }
             },[calculatedResultEthiopia]);
             useEffect(()=>{
                     if(ethiopianDateToConvert){
                      setEthiopianDate(ethiopianDateToConvert);
                     }
             },[ethiopianDateToConvert]);
  function backGroundFinished(){
             setFinishBack(true);
  }
  function calenderSelectedFunction(calender){
            setCalenderSelected(calender);
  }
  useEffect(()=>{
        if(calenderSelected == "ethiopia" && showCurrentCalender != 0){
           if(!showEthCalender){
            setShowEthCalender(true);
            
           }
           else{
              setShowEthCalender(false);
              setShowGregorianCalender(false);
              // setCalenderSelected("");
           }
         
        }
        else if(calenderSelected == "gregorian" && showCurrentCalender !=0){
          if(!showGregorianCalender){
            setShowGregorianCalender(true);
            
           }
           else{
              setShowGregorianCalender(false);
              setShowEthCalender(false);
              // setCalenderSelected("");
           }
           
        }
        else if(calenderSelected == "outside"){
          setShowGregorianCalender(false);
          setShowEthCalender(false);
        }
  },[calenderSelected,showCurrentCalender]);
  useEffect(()=>{
            setTimeout(()=>{
               setShowIntroCalender(true);
            },1000);
  },[]);
  useEffect(()=>{
      console.log("back asset pic: ",backAssetPic);
      console.log("asset pic month: ",assetPicMonth);
      if(backAssetPic.length > 0 && assetPicMonth.length > 0 && pictureLoaded && allPicturesLoaded){
          setShowLoading(true);
        setTimeout(()=>{
          setReadyToRender(true);
          setShowLoading(false);
        },7500);
       
      }
  },[backAssetPic,assetPicMonth,allPicturesLoaded,pictureLoaded]);
  

  const functionFromTrackClicked = ()=> {
       setFromClicked(prev => prev + 1);
  }
  function  receiveGregorianDate(receivedDate){
           console.log("received date: ",receivedDate);
           const formattedDate = formatDate(receivedDate);
           setFromGregToEthiopia(true);
           setFromEthioToGreg(false);
           setGregorianDate(formattedDate);

  }
  function receiveEthiopianDate(receivedDate){
    console.log("received date: ",receivedDate);
    setEthiopianDateToConvert(receivedDate);
    setFromGregToEthiopia(false);
           setFromEthioToGreg(true);
  }
  
  const formatDate = (dateString) => {
    // Parse the date string
    const date = new Date(dateString);
    
    // Get the year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(date.getDate()).padStart(2, '0'); // Day of the month

    // Return the formatted date
    return `${year}-${month}-${day}`;
};
function changeDesktopImage(url){
    setChangeImage(true);
    setNewSetImage(url);
}
function hideBothCalender(){
   setShowEthCalender(false);
   setShowGregorianCalender(false);
}
function ShowCurrentCalenderFunction(){
  setShowCurrentCalender(prev => prev + 1);
}

  return (
    <>
        {
          showLoading && (
            <LoadingImages backPics={backAssetPic}  />
          )
        }
     {
      readyToRender && (
        <div className={` ${isTablet ? "":""} flex items-start justify-center h-screen w-full overflow-x-hidden relative bg-gray-600`}>
        <BackGroundMobile backPics={backAssetPic}   finishedBack={backGroundFinished} changeImage={changeImage} newImage={newSetImage} />
        {
          showIntroCalender && (
            <IntroCalender backPics={backAssetPic} />
          )
        }
     
        {
          finishBack && (
            <>
            {
              showGregorianCalender && (
                <GregorianCalender sendGregorianData={receiveGregorianDate} backPics={backAssetPic} />
              )
            }
           
            {
              showEthCalender && (
                <EthiopianCalendar  sendEthiopiaDate={receiveEthiopianDate} />
              )
            }
            
            <ConvertButton showCurrentCalender={ShowCurrentCalenderFunction} collectionImage2={assetPicMonth} backPics={backAssetPic} changeDesktopImage={changeDesktopImage} calenderSelected={calenderSelectedFunction} fromEthiopianToGregorian={fromEthioToGreg} fromGregorianToEthiopia={fromGregToEthio} hideBothCalender={hideBothCalender} fromTrack={functionFromTrackClicked} ethiopianDate={ethiopianDate} gregorianDate={gregorianDate}  />
            </>
          )
        }
    </div>
      )
     }
   
    </>
  );
}

export default App;