'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
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

const MultiFormPage = () => {
  const params = useSearchParams();
  const router = useRouter();
  const stepParams = params.get('step'); // null or 1,2,3,4
  const step_ = stepParams ? stepParams : 1;
  const parsedStep = parseInt(step_);
  const [counterStep, setCounterStep] = useState(parsedStep);
  const [formData, setFormDate] = useState({
    email: '',
    accountType:'',
    fullname:'',
    password:''
  });
  const handleFormData = (e) => {  
    setFormDate((oldState) => {
      return {
        ...oldState,
        // email:'jjj',
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleNextStep = () => {
    if (counterStep <= 3) {
      setCounterStep((oldStep) => {
        // oldState is the state before the update is made by the state setter
        return oldStep + 1;
      });
    }
  };
  console.log('formData',formData)
  useEffect(() => {
    router.push(`?step=${counterStep}`);
  }, [counterStep]);

  const handlePreviousStep = () => {
    if (counterStep >= 1) {
      setCounterStep((oldStep) => {
        return oldStep - 1;
      });
    }
  };

  const handleStep = (nextLevel) => {
    router.push(`?step=${nextLevel}`);
  };

  switch (parsedStep) {
    case 1:
      return (
        /* value={formData.email} */
        <form className="center-me">
          <CurrentStep level={parsedStep} />
          <h3>Let &apos;s get started, </h3>
          <div>
            <label>
              email
              <input type="text" value={formData.email}  name="email" onChange={handleFormData} />
            </label>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                // handleStep(2);
                handleNextStep();
              }}
            >
              Next
            </button>{' '}
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
              Recruiter <input type="radio" onChange={handleFormData}  value='recruiter' name="accountType" />
            </label>
          </div>
          <div>
            <label>
              Employee <input type="radio" onChange={handleFormData} value='employee'  name="accountType" />
            </label>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                // handleStep(3);
                handleNextStep();
              }}
            >
              Next
            </button>{' '}
            <button
              type="button"
              onClick={() => {
                // handleStep(1);
                handlePreviousStep();
              }}
            >
              Previous
            </button>
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
              <input type="text" value={formData.fullname} name="fullname" onChange={handleFormData} placeholder="Enter you full name" />
            </label>
          </div>
          <div>
            <label>
              password
              <input type="text" name="password" value={formData.password} onChange={handleFormData}  placeholder="Enter password" />
            </label>
          </div>
          <div>
            <button type="button">Submit</button>{' '}
            <button
              type="button"
              onClick={() => {
                // handleStep(2);
                handlePreviousStep();
              }}
            >
              Previous
            </button>
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
