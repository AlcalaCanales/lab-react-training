import React from 'react';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color  }) => {
  return (
    <div class="credit-card" style={{ backgroundColor: bgColor, color: color}}>
        <div class="cc-type">
          <img  src={type === "Visa" ? './img/visa.png' :'./img/master-card.svg' } alt=""/>
        </div>
        <div>
          <p>•••• •••• •••• {number.substr(-4)}</p>
        </div>
        <div>
          <div class="data" >
            <span>
              Expires: {expirationMonth}/{expirationYear}
            </span>
            <span class="bank-name">
              {bank}
            </span>
          </div>
          <div class="data">
            <span>{owner}</span>
          </div>
        </div>
  </div>
)
}

export default CreditCard;
