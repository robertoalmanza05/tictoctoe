import React, { useEffect, useState } from "react";

export default function A() {
  const [images, setImages] = useState<Array<string>>([]);

  useEffect(() => {
    const xd = () => {
      if (images.length > 1) return () => {};

      const test = [];

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      };

      fetch("https://api.waifu.pics/many/sfw/waifu", requestOptions)
        .then((response) => response.json())
        .then((data) => setImages(data?.files));
    };
    xd();
  }, [images.length]);

  return (
    <div style={{ backgroundColor: "black" }}>
<h1 style={{color:"green", display:"flex",justifyContent:"center"}}>Hola</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            justifyContent: "center",
            display: "grid",
            gridTemplateColumns: ".8fr .8fr .8fr .8fr ",
            gridGap: "10px",
          
          }}
        >
          {images.map((image, index) => {
            return (
              <img
                style={{

                  width: "250px",
                  height: "250px",
                  borderRadius: "40px",
                  paddingLeft:"15px",
                  paddingRight:"15px",
                  paddingTop:"5px"

                }}
                key={index}
                src={`${image}`}
              ></img>
            );
          })}
        </div>
      </div>
    </div>
  );
}
