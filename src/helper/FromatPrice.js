import React from 'react';

const FromatPrice = ({price}) => {
  return Intl.NumberFormat("en-In", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2, 
  }).format(price/100);
};

export default FromatPrice;
