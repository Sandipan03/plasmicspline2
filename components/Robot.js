/**@format */
import React from 'react'
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Robot({className}) {
    useGSAP(()=>{
        gsap.to(".loader",{
            opacity: 0,
            duration: 1,
            delay: 1,
            rotate: 180,
        })
        gsap.from(".spline",{
            opacity: 0,
            duration: 1,
            delay: 2,
        })
    })
  return (
    <div className={className} style={{width:"100vw",height: "100vh"}}>
        <h1 className="loader" style={{position: "absolute", marginLeft: "40vw", marginTop: "40vh"}}>Loading...</h1>
        <Spline className="spline" scene="https://prod.spline.design/id5se5REy17fe7RR/scene.splinecode" />
  

    </div>
  )
}

export default Robot