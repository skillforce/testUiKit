import React from 'react';
import './popUp.css';

const PopUp = ({ content, popUpBoxStyle,popUpContainerStyle }) => {
  return (
    <div className="popup-container" style={popUpContainerStyle}>
      <div className="popup-box" style={popUpBoxStyle}>
        {content}
      </div>
    </div>
  );
};
export default PopUp;
