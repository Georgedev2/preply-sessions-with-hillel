'use client';
import React, { useState } from 'react';
import ProductVariation from '../ProductVariation';


const SubscriptionTerm = (props) => {
    const {variation,price}= props;
    const [subTerm, setSubTerm]=useState(1)
  return (
    <div>
      <p> R {Math.ceil(price*subTerm)}</p>
      <div>
        <b>Subscription Terms: </b>
        <ProductVariation variation={variation[0]} getItem={(arg)=>{
            setSubTerm(arg)
            
        }}/>
      </div>
    </div>
  );
};

export default SubscriptionTerm;
