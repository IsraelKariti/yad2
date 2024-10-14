import React, {useState, useEffect} from 'react';

export const CarouselImg = ({narrowImg, wideImg})=>{
    const [imgSrc, setImgSrc] = useState('');

    useEffect(()=>{
        const onResize = ()=>{
            const innerWidth = window.innerWidth;
            if(innerWidth < 880){
                setImgSrc(narrowImg)
            }
            else{
                setImgSrc(wideImg)
            }
        }

        window.addEventListener('resize', onResize);
        onResize();
        return ()=>{
            window.removeEventListener('resize', onResize);
        }
    },[]);
    return <img src={imgSrc} alt="drushim advertisement" />
}

