import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',
    adhar: '',
    pan: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    navigate('/dashboard');
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      padding: '20px'
    },
    form: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '500px'
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '8px 0',
      borderRadius: '6px',
      border: '1px solid #ccc',
      fontSize: '16px'
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '10px'
    },
    link: {
      marginTop: '10px',
      textAlign: 'center',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Create Grow Account</h2>
        <input style={styles.input} name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input style={styles.input} name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input style={styles.input} name="age" type="number" placeholder="Age" onChange={handleChange} required />
        <input style={styles.input} name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input style={styles.input} name="phone" placeholder="Phone" onChange={handleChange} required />
        <input style={styles.input} name="adhar" placeholder="Aadhar No." onChange={handleChange} required />
        <input style={styles.input} name="pan" placeholder="PAN No." onChange={handleChange} required />
        <input style={styles.input} name="address" placeholder="Address" onChange={handleChange} required />
        <input style={styles.input} name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input style={styles.input} name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required />
        <button style={styles.button} type="submit">Register</button>
        <div style={styles.link}>
          <p>Already have an account? <a href="/">Login</a></p>
        </div>
      </form>
    </div>
  );
}

export default Register;
