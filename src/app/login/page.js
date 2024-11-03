'use client';
import { useState } from 'react';
import styles from './login.module.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  const sendFormData = async () => {
    console.log('formData',formData)
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username: formData.email,
        password: formData.password,
      }),
    });
    const data = await res.json();
    console.log('data', data);
  };
  
  return (
    <form className={styles.loginForm}>
      <h3>Login Form</h3>
      <input placeholder="email" name="email" onChange={handleChange} />
      <br />
      <input placeholder="password" name="password"onChange={handleChange}/>       <br />
      <button type="button" onClick={sendFormData}>
        login
      </button>
    </form>
  );
};

export default LoginPage;
