import React from 'react';

const Greetings = (props) => {
  let sayHello = '';

  switch (props.lang) {
    case 'de':
      sayHello = 'Hallo';
      break;
    case 'en':
      sayHello = 'Hello';
      break;
    case 'es':
      sayHello = 'Hola';
      break;
    case 'fr':
      sayHello = 'Bonjour';
      break;
  }

  return (
    <div class="box">
      <p class="box-text">
        {sayHello} {props.children}
      </p>
    </div>
  );
};

export default Greetings;
