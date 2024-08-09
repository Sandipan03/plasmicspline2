/**@format */
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';

function Robot({ className }) {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
    gsap.to(".loader", {
      opacity: 0,
      duration: 1,
      
    });
    gsap.from(".spline", {
      opacity: 0,
      duration: 1,
    });
  };

  return (
    <div className={className} style={{ width: '100vw', height: '100vh' }}>
      {loading && (
        <h1
          className="loader"
          style={{
            fontSize: '40px',
            position: 'absolute',
            marginLeft: '45vw',
            marginTop: '40vh',
          }}
        >
          Loading...
        </h1>
      )}
      <Spline
        className="spline"
        scene="https://prod.spline.design/id5se5REy17fe7RR/scene.splinecode"
        onLoad={handleLoad}
      />
    </div>
  );
}

export default Robot;
