import React from "react";
import PropTypes from "prop-types";

export const Blurblob = ({position, size}) => {
  // Destructure position and size for easier access
  const { top, left } = position|| { top: "25%", left: "25%" }; 
  // Default size if not provided
  // This allows the blob to be positioned and sized dynamically
  // If size is not provided, it defaults to 30% width and 40%
  // height, which can be adjusted as needed
  const { width, height } = size || { width: "15%", height:"20%"};
  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: `translate(-50%, -50%)`,
      }}
    >
      <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
    </div>
  );
};
//define proptypes for the component
Blurblob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  })
};
