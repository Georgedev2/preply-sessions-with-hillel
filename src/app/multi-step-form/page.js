'use client';
import React, { useState } from 'react';
const TOTAL_STEP = 3;

const CurrentStep = (props) => {
  return (
    <p>
      Step
      <b>
        {props.level}/{TOTAL_STEP}
      </b>
    </p>
  );
};

const MultiFormPage = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step <= 3) {
      setStep((oldStep) => {
        return oldStep + 1;
      });
    }
  };
  const handlePreviousStep = () => {
    if (step >= 1) {
      setStep((oldStep) => {
        return oldStep - 1;
      });
    }
  };

  switch (step) {
    case 1:
      return (
        <form className="center-me">
          <CurrentStep level={step} />
          <h3>Let &apos;s get started</h3>
          <div>
            <label>
              email
              <input type="text" />
            </label>
          </div>
          <div>
            <button onClick={handleNextStep}>Next</button>{' '}
            {step !== 1 ? (
              <button onClick={handlePreviousStep}>Previous</button>
            ) : (
              ''
            )}
          </div>
        </form>
      );
    case 2:
      return (
        <form className="center-me">
          <CurrentStep level={step} />
          <h3>Who are you ?</h3>
          <div>
            <label>
              Recruiter <input type="radio" />
            </label>
          </div>
          <div>
            <label>
              Employee <input type="radio" />
            </label>
          </div>
          <div>
            <button onClick={handleNextStep}>Next</button>{' '}
            <button onClick={handlePreviousStep}>Previous</button>
          </div>
        </form>
      );
    case 3:
      return (
        <form className="center-me">
          <CurrentStep level={step} />
          <h3>Other details</h3>
          <div>
            <label>
              fullname
              <input type="text" placeholder="Enter you full name" />
            </label>
          </div>
          <div>
            <label>
              password
              <input type="text" placeholder="Enter password" />
            </label>
          </div>
          <div>
            <button type="button">Submit</button>{' '}
            <button onClick={handlePreviousStep}>Previous</button>
          </div>
        </form>
      );
    default:
      return <></>;
  }
  //   return <div></div>;
};

export default MultiFormPage;
// multi-step-form
//value={`${step}`}
//   const props = {
//     go: 'kkkk',
//     level: step,
//     j: 4,
//     n: true,
//     handleClick: () => {
//       console.log('clicked');
//     },
//   };
