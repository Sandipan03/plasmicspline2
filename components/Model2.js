/**@format */
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';

function Model2({ className }) {
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
     
      <Spline
        className="spline"
        scene="https://prod.spline.design/DoeRyB08RDh7hUMG/scene.splinecode"
        onLoad={handleLoad}
      />
    </div>
  );
}

export default Model2;