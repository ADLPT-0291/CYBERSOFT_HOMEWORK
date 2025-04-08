import { useState } from 'react';
export function Glasses(){
    const [glasses, setGlasses] = useState("v1");
    return (
        <>
            <div style={{ position: 'relative',display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop: "30px"}}>
                <img 
                    src="public/glassesImage/model.jpg" 
                    alt="Model Left" 
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
                />
                
            </div>
            <div className="Anhkinh">
                <img 
                src={`public/glassesImage/${glasses}.png`} alt=""
                style={{ position: 'absolute', width: '120px', height: '40px',
                    top: '120px',
                    left:'707px',
                    zIndex: 2,
                 }} 
                 />
            </div>
            <div className="listKinh"
            style={{paddingTop: "50px",display: "flex", gap: "10px", justifyContent: "center"}}>
                    <img src="public/glassesImage/v1.png" 
                    alt="v1" 
                    style={{ width: 'auto', height: '50px' , cursor: "pointer",
                        border: "2px solid white",
                     }}
                    onClick={()=>{
                        setGlasses("v1");
                    }}></img>

                    <img src="public/glassesImage/v2.png" 
                    alt="v2" 
                    style={{ width: 'auto', height: '50px' , cursor: "pointer",
                        border: "2px solid white",
                    }}
                    onClick={()=>{
                        setGlasses("v2");
                    }}></img>

                    <img src="public/glassesImage/v3.png" 
                    alt="v3" 
                    style={{ width: 'auto', height: '50px' , cursor: "pointer",
                        border: "2px solid white",}}
                    onClick={()=>{
                        setGlasses("v3");
                    }}></img>

                    <img src="public/glassesImage/v4.png" 
                    alt="v4" 
                    style={{ width: 'auto', height: '50px' , cursor: "pointer",
                        border: "2px solid white",}}
                    onClick={()=>{
                        setGlasses("v4");
                    }}></img>

                    <img src="public/glassesImage/v5.png" 
                    alt="v5" 
                    style={{ width: 'auto', height: '50px' , cursor: "pointer",
                        border: "2px solid white",}}
                    onClick={()=>{
                        setGlasses("v5");
                    }}></img>

                    <img src="public/glassesImage/v6.png" 
                    alt="v6" 
                    style={{ width: 'auto', height: '50px' , cursor: "pointer",
                        border: "2px solid white",}}
                    onClick={()=>{
                        setGlasses("v6");
                    }}></img>

                    <img src="public/glassesImage/v7.png" 
                    alt="v7" 
                    style={{ width: 'auto', height: '50px' , cursor: "pointer",
                        border: "2px solid white",}}
                    onClick={()=>{
                        setGlasses("v7");
                    }}></img>

                    <img src="public/glassesImage/v8.png" 
                    alt="v8" 
                    style={{ width: 'auto', height: '50px' , cursor: "pointer",
                        border: "2px solid white",}}
                    onClick={()=>{
                        setGlasses("v8");
                    }}></img>

                    <img src="public/glassesImage/v9.png" 
                    alt="v9" 
                    style={{ width: 'auto', height: '50px' , cursor: "pointer",
                        border: "2px solid white",}}
                    onClick={()=>{
                        setGlasses("v9");
                    }}></img>
            </div>
        </>
    )
}