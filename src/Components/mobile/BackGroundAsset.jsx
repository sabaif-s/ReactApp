import React from 'react';
import { useEffect,useState } from 'react';
import mobileBack from '../../assets/pictures/ethio2_11zon.jpg';
import desktopBack from '../../assets/pictures/48421_6_11zon.jpg';
import imageWheat from '../../assets/pictures/wheat_24_11zon.jpg';
import imageShegar from '../../assets/pictures/shegar_4_11zon.jpg';
import imageSpring from '../../assets/pictures/spring_5_11zon.jpg';
import imageSpringNew from '../../assets/pictures/spring_22_11zon.jpg';
import imageNewYear from '../../assets/pictures/new year_18_11zon.jpg';
import icon from '../../assets/pictures/icons8-calendar-96.png';
import desertMob from '../../assets/pictures/desert deskt_7_11zon.jpg';
import forestMob from '../../assets/pictures/fores_13_11zon.jpg';
import forest2Mob from '../../assets/pictures/forest mobil_16_11zon.jpg';
import forest3Mob from '../../assets/pictures/forestt_17_11zon.jpg';
import riverMob from '../../assets/pictures/river_11zon.jpg';
import eve from '../../assets/pictures/evedeskt_11_11zon.jpg'
import gif from '../../assets/pictures/Pulse@1x-1.0s-200px-200px (1).gif';
import sabaa from '../../assets/pictures/sabk.jpeg';
const  BackGroundAsset = (fetchImage) => {
    const [pictureLoaded,setPictureLoaded]=useState(false);
    const [allPicturesLoaded,setAllPicturesLoaded]=useState(false);
    const [backAssetPic,setAssetPicBack]=useState([]);
    const [assetPicMonth,setAssetPicMonth]=useState([]);
    const imageUrls=[mobileBack,desktopBack,icon,gif,sabaa];
    const collectionImages=[imageNewYear,imageSpring,imageShegar,riverMob,forest2Mob,forest3Mob,forestMob,imageWheat,imageSpringNew,desertMob,imageShegar,forestMob,eve,];
    useEffect(() => {
        const loadImages = async () => {
          try {
            const loadedImages = await Promise.all(
              imageUrls.map((url) => {
                return new Promise((resolve, reject) => {
                  const img = new Image();
                  img.src = url;
                  img.onload = () => resolve(img); // Resolve on successful load
                  img.onerror = () => reject(new Error(`Failed to load image at ${url}`)); // Reject on error
                });
              })
            );
    
             
            console.log("loaded images:",loadedImages);
            // Set loaded images
            setAssetPicBack(loadedImages);
            setPictureLoaded(true); // Update state to indicate images are loaded
          } catch (error) {
            console.error(error); // Log any errors
          }
        };
    
        // Call the loadImages function
        if(fetchImage == true){
          loadImages();
        }
        
      }, [fetchImage]);
      useEffect(() => {
        const loadImagesButtons = async () => {
          try {
            const loadedImages = await Promise.all(
              collectionImages.map((url) => {
                return new Promise((resolve, reject) => {
                  const img = new Image();
                  img.src = url;
                  img.onload = () => resolve(img); // Resolve on successful load
                  img.onerror = () => reject(new Error(`Failed to load image at ${url}`)); // Reject on error
                });
              })
            );
    
             
            console.log("loaded images:",loadedImages);
            // Set loaded images
            setAssetPicMonth(loadedImages);
            setAllPicturesLoaded(true); // Update state to indicate images are loaded
          } catch (error) {
            console.error(error); // Log any errors
          }
        };
    
        // Call the loadImages function
        if(fetchImage == true){
          console.log("fetch image true");
          loadImagesButtons();
        }
        
      }, [fetchImage]);
    
      return{pictureLoaded,allPicturesLoaded,backAssetPic,assetPicMonth}
};

export default  BackGroundAsset;