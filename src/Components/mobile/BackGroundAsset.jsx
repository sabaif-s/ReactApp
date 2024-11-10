import React from 'react';
import { useEffect,useState } from 'react';
import mobileBack from '../../assets/pictures/ethio2.png';
import desktopBack from '../../assets/pictures/48421.jpg';
import imageWheat from '../../assets/pictures/wheat.avif';
import imageShegar from '../../assets/pictures/shegar.avif';
import imageSpring from '../../assets/pictures/springNew.avif';
import imageSpringNew from '../../assets/pictures/spring.avif';
import imageNewYear from '../../assets/pictures/new year.avif';
 
import desertMob from '../../assets/pictures/desert mob.avif';
import forestMob from '../../assets/pictures/fores.avif';
import forest2Mob from '../../assets/pictures/forest mobil.avif';
import forest3Mob from '../../assets/pictures/forestt.avif';
import riverMob from '../../assets/pictures/river.avif';
import eve from '../../assets/pictures/evedeskt.avif'
const  BackGroundAsset = () => {
    const [pictureLoaded,setPictureLoaded]=useState(false);
    const [allPicturesLoaded,setAllPicturesLoaded]=useState(false);
    const [backAssetPic,setAssetPicBack]=useState([]);
    const [assetPicMonth,setAssetPicMonth]=useState([]);
    const imageUrls=[mobileBack,desktopBack];
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
        loadImages();
      }, []);
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
        loadImagesButtons();
      }, []);
    
      return{pictureLoaded,allPicturesLoaded,backAssetPic,assetPicMonth}
};

export default  BackGroundAsset;