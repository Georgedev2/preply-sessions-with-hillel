'use client';
import React, { useState } from 'react';
import ProductVariation from '../ProductVariation';

const SubscriptionTerm = (props) => {
  const { variation, price } = props;
  const [subTerm, setSubTerm] = useState(1);
  return (
    <div>
      <p> R {Math.ceil(price * subTerm)}</p>
      <div>
        <b>Subscription Terms: </b>
        {variation.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              setSubTerm(item);
            }}
            style={{ marginRight: '5px' }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionTerm;
