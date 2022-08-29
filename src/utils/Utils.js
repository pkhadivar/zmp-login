import {useState, useEffect} from 'react';


export const useLandscapeMode = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
  
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);
  
    const isLandscape = width > height;
  
    return isLandscape;
  };

