import React, { useState, useEffect } from 'react';
import image1 from './pictures/48421.jpg';
import image2 from './pictures/desert deskt.avif';
import image10 from './pictures/springNew.avif';
import image3 from './pictures/river.avif';
import image4 from './pictures/desert mob.avif';
import image5 from './pictures/spring.avif';
import image6 from './pictures/new year.avif';
import image7 from './pictures/nighttdes.avif';
import image8 from './pictures/forestt.avif';
import image9 from './pictures/fores.avif';
const  PicturesLoading = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [images, setImages] = useState([]);
  
    const imageUrls=[image1,image10,image2,image3,image4,image5,image6,image7,image9,image8];
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
    
            setImages(loadedImages); 
            console.log("loaded images:",loadedImages);
            // Set loaded images
            setImagesLoaded(true); // Update state to indicate images are loaded
          } catch (error) {
            console.error(error); // Log any errors
          }
        };
    
        // Call the loadImages function
        loadImages();
      }, []);
  
    if (!imagesLoaded) {
      return <div>Loading images...</div>; // You can customize this loading message
    }
  
    return (
      <div>
        {images.map((img, index) => (
          <img key={index} src={img.src} alt={`Loaded image ${index + 1}`} />
        ))}
      </div>
    );
};

export default  PicturesLoading;