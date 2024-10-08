'use client';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
const TOTAL_STEP = 3;

const CurrentStep = (props) => {
  const { level } = props;
  return (
    <p>
      Step
      <b>
        {level}/{TOTAL_STEP}
      </b>
      multi-step-with-state-in-url
    </p>
  );
};

// https://vercel.com/georgedevs-projects?projectDeleted=unsplash_clone
const MultiFormPage = () => {
  const params = useSearchParams();
  const stepParams = params.get('step'); // null or 1,2,3,4
  const step_ = stepParams ? stepParams : 1;
  const parsedStep = parseInt(step_);

  const handleNextStep = () => {};
  const handlePreviousStep = () => {};

  switch (parsedStep) {
    case 1:
      return (
        <form className="center-me">
          <CurrentStep level={parsedStep} />
          <h3>Let &apos;s get started, </h3>
          <div>
            <label>
              email
              <input type="text" />
            </label>
          </div>
          <div>
            <button onClick={handleNextStep}>Next</button>{' '}
            {parsedStep !== 1 ? (
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
          <CurrentStep level={parsedStep} />
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
          <CurrentStep level={parsedStep} />
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
// ~>   /multi-step-with-state-in-url


