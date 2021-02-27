import React from 'react';

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
  return (
    <div class="id-card">
      <div class="portrait">
        <img src={picture} alt="picture" />
      </div>
      <div class="person-information">
        <p>
          <strong>First name: </strong> {firstName}
        </p>
        <p>
          <strong>Last name: </strong> {lastName}
        </p>
        <p>
          <strong>Gender: </strong> {gender}
        </p>
        <p>
          <strong>Height: </strong> {height}
        </p>
        <p>
          <strong>Birth: </strong> {birth.toUTCString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
