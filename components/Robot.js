/**@format */
import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Robot({ className }) {
<<<<<<< HEAD
  return (
    <div className={className} style={{ width: "100vw", height: "100vh" }}>
=======
 

  return (
      
        
       <div className={className} style={{ width: "100vw", height: "100vh" }}>
>>>>>>> d4cf371847929add9ed5fa0ba70d686ac65ef225
      <Suspense
        fallback={
          <h1
            className='loader'
            style={{
              fontSize: "40px",
              position: "absolute",
              marginLeft: "45vw",
              marginTop: "40vh",
            }}
          >
            Loading....
          </h1>
        }
      >
        <Spline scene='https://prod.spline.design/6Re8UFR1WXy53RFH/scene.splinecode' />
      </Suspense>
    </div>
  );
}

export default Robot;
