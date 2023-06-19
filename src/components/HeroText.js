import React from 'react';

const HeroText = () => {
  return (
    <div
      className="d-flex justify-content-center text-black heroStyle flex-column"
      style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
    >
      <div
        className="opacity-75 px-3 bg-light rounded"
      >
        <p style={{ fontSize: "200%" }}>Luxuory Rooms</p>
        <hr
          className="rounded"
          style={{ height: "5px", width: "70%", color: "black", backgroundColor: "black", opacity: "0.7", margin: "auto" }}
        />
        <p className="pt-3">Starting from $200</p>
        <button type="button" className="btn btn-outline-dark mb-2">More Info</button>
      </div>
    </div>
  );
};

export default HeroText;
