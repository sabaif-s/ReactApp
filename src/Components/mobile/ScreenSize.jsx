import React from 'react';
import { useMediaQuery } from 'react-responsive';
const  ScreenSize = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 769px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 539px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 540px) and (max-width: 768px)' });
    

    return{isDesktopOrLaptop,isMobile,isTablet}
};

export default  ScreenSize;