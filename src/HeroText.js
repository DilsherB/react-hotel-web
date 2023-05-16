import React from 'react';

const HeroText = () => {
  return (
    <div className="d-flex justify-content-center text-black heroStyle">
      <div
        className="opacity-75 col-4 bg-light rounded"
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <p style={{ fontSize: "200%" }}>Luxuory Rooms</p>
        <hr
          className="rounded"
          style={{ height: "5px", width: "50%", color: "black", backgroundColor: "black", opacity: "0.7", margin: "10% auto" }}
        />
        <p>Starting from $200</p>
      </div>
    </div>
  );
};

export default HeroText;
