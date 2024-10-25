'use client';
import React, { useEffect, useState } from 'react';

const Child = () => {
  //   useEffect(() => {
  //     console.log(`Child render`);
  //     return () => {
  //       console.log('i am unmounting child');
  //     };
  //   },[]);
  return (
    <div>
      <b>i am a child</b>{' '}
    </div>
  );
};

const Page = () => {
  const [count, setCount] = useState(0);
  const [x, setX] = useState('');

  useEffect(() => {
    // console.log(`run: ${count}`);

  },[count, x]);

  return (
    <div>
      count is: {count}
    <b>{x}</b>  
      <br />
      {count < 19 ? <Child /> : ''}
      <button
        onClick={() => {
          setCount((oldCount) => {
            return oldCount + 1;
          });
        }}
      >
        increase count
      </button>
      <button
        onClick={() => {
          setX('good');
        }}
      >Set X</button>
    </div>
  );
};

export default Page;
