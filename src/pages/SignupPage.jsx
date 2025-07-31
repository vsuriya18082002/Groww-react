import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/growbackground.png';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    age: '',
    address: '',
    aadhar: '',
    pincode: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const isValid = Object.values(formData).every(field => field.trim() !== '');
    if (!isValid) {
      return alert('Please fill all the fields');
    }
    if (formData.password !== formData.confirmPassword) {
      return alert('Passwords do not match');
    }
    alert('Signup successful!');
    navigate('/');
  };

  return (
    <div style={pageStyle}>
      <div style={outerBoxStyle}>
        <form onSubmit={handleSignup} style={formStyle}>
          <h2 style={headingStyle}>Signup</h2>

          {/* Grid structure */}
          <div style={gridStyle}>
            {/* 1st column */}
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} style={inputStyle} />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} style={inputStyle} />

            {/* 2nd column */}
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} style={inputStyle} />
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} style={inputStyle} />

            {/* 3rd column */}
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} />

            {/* 4th column */}
            <input type="text" name="aadhar" placeholder="Aadhar Number" value={formData.aadhar} onChange={handleChange} style={inputStyle} />

            {/* 5th column */}
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={inputStyle} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} style={inputStyle} />

            {/* 6th column */}
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} style={inputStyle} />
            <input type="text" name="pincode" placeholder="Pin Code" value={formData.pincode} onChange={handleChange} style={inputStyle} />
          </div>

          <button type="submit" style={buttonStyle}>Signup</button>
        </form>
      </div>
    </div>
  );
};

// Outer background
const pageStyle = {
  minHeight: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// Outer box
const outerBoxStyle = {
  backgroundColor: 'rgba(255,255,255,0.95)',
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0px 8px 30px rgba(0,0,0,0.3)',
  // border: '2px solid #292b2dff',
  width: '100%',
  maxWidth: '650px',
};

// Form layout
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

// Grid for inputs
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '15px',
};

const headingStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#12583cff',
  marginBottom: '10px',
};

const inputStyle = {
  padding: '12px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '16px',
  width: '90%',
};

const buttonStyle = {
  padding: '12px',
  backgroundColor: '#10b34eff',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  width: '50%',
  alignSelf: 'center',
  transition: 'background-color 0.3s',
};

export default SignupPage;
