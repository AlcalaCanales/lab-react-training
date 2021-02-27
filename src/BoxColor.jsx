import React from 'react';

const BoxColor = ({ r,g,b,children }) => {
  
  return <div class= "box" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
    <p>rgb({r},{g},{b})</p>
    </div>;
};

export default BoxColor;
