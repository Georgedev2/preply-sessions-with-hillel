'use client';
import { useState } from 'react';
import TextInput from '../components/ui/TextInput';

const SignupPage = () => {
  // const [username, setUsername] = useState(''); //['maybe' ,()=>{}]
  // const [password, setPassword] = useState('');
  
  const [formData, setFormData] = useState({ username: '', password: '' }); // [{username:'',password:''}, ()=>{}]
  const submitForm = () => {
    const data = { username: username, password: password };
    console.log('data', data);
  };
  console.log('formdata',formData)
  return (
    <div className="center-me">
      {/* <p>
        password <b>{username}</b>{' '}
      </p>
      <p>
        username <b>{password}</b>
      </p> */}
      <input
        placeholder="username"
        onChange={(e) => {
          setFormData((oldState)=>{
            return {...oldState, username: e.target.value }
          })
          // setUsername(e.target.value);
        }}
      />{' '}
      <br />
      <input
        placeholder="password"
        onChange={(e) => {
          setFormData((oldState)=>{
            return {...oldState, password: e.target.value }
          })
          // setPassword(e.target.value);
        }}
      />{' '}
      <br />
      <button
        onClick={() => {
          submitForm()
    
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignupPage;
