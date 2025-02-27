import React, { useLayoutEffect, useState} from 'react'; 

 export const useScroll = ( ref ) => { 
     const [ scroll, setScroll ] = useState(false); 
     const updateScroll = () => {
       if(!ref.current) return
       
       let isScroll = false
       const heightTop = window.scrollY
       
       if(ref.current.offsetHeight < heightTop) 
        isScroll = true
      
      
      // if(heightHeaderRef.current.offsetHeight > heightTop)
      // isScroll = false
      
      setScroll(isScroll)
    }
    
    useLayoutEffect( () => { 
      window.addEventListener('scroll',updateScroll)
 
         updateScroll(); 
         return () => {
               window.removeEventListener('scroll',updateScroll)
         } 
     }, [] ); 

     return scroll; 
 }