import React from 'react';

const Rating = ({ children }) => {
  let stars = '★';

  return (
    <div class="stars">
      {stars.repeat(Math.round(children)).padEnd(5, '☆')}
    </div>
  );
};

export default Rating;
