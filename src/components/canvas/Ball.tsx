import React from "react";

const Ball: React.FC<{ imgUrl: string }> = ({ imgUrl }) => {
  return (
    <div className="ball-image">
      <img src={imgUrl} alt="Technology Icon" className="w-full h-full object-contain" />
    </div>
  );
};

export default Ball;
