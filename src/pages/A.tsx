import React, { useEffect, useState } from 'react'

export default function A() {

    const [images, setImages] = useState<Array<string>>([])

    useEffect(() => {
        if(images.length>29 )return ()=> {}

        const test= []
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };
        
        fetch('https://api.waifu.pics/many/sfw/waifu', requestOptions)
            .then(response => response.json())
            .then(data => setImages(data?.files));
        
        
    }, [images.length]);

    
  return (
    <div>
    
    
    {images.map((image,index) => {
            return (
            <img style={{width:"300px", height:"300px"}} key={index} 
            src={`${image}`}></img> 

            );
          })}
    </div>
    
  )

}