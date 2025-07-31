import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/growbackground.png';
import logo from '../assets/growlogo.png';
import loginimg from '../assets/login.jpg';
import img from '../assets/img1.jpg';


function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  // const [showSignup, setShowSignup] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [signupData, setSignupData] = useState({
  //   firstName: '', lastName: '', phone: '', age: '', address: '',
  //   aadhar: '', pincode: '', email: '', password: '', confirmPassword: ''
  // });

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email === 'vs@gmail.com' && password === '123') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  // const handleSignupChange = (e) => {
  //   const { name, value } = e.target;
  //   setSignupData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSignupSubmit = (e) => {
  //   e.preventDefault();
  //   const { firstName, lastName, phone, age, address, aadhar, pincode, email, password, confirmPassword } = signupData;
  //   if (password !== confirmPassword) return alert('Passwords do not match');
  //   if (!firstName || !lastName || !phone || !age || !address || !aadhar || !pincode || !email || !password) {
  //     return alert('Please fill all fields');
  //   }
  //   alert('Signup successful!');
  //   setShowSignup(false);
  //   setShowLogin(true);
  // };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Groww Logo" style={styles.logo} />
          <h1 style={{ color: 'GrayText' }}>GROWW</h1>
        </div>
        <div>
          <button onClick={() => { setShowLogin(true); setShowSignup(false); }} style={styles.topButton}>Login</button>
          <button onClick={() => navigate('/signup')} style={styles.topButton}>Signup</button>

        </div>
      </div>

      {/* Login Section */}
      {showLogin && (
        <div style={styles.splitLayout}>
          {/* Left - Login Form */}
          <div style={styles.leftPanel}>
            <form onSubmit={handleLoginSubmit} style={styles.loginForm}>
              <h2 style={{ marginBottom: '20px', textAlign: 'center', fontWeight: 'bold', color: '#12583cff' }}>Login</h2>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />
              <button type="submit" style={styles.button}>Login</button>
            </form>
          </div>

          {/* Right - Image */}
          <div style={styles.rightPanel}></div>
        </div>
      )}

      {/* Signup Form */}
      {/* {showSignup && (
        <div style={styles.centerBox}>
          <form onSubmit={handleSignupSubmit} style={styles.form}>
            <h2 style={{ textAlign: 'center' }}>Signup</h2>
            {['firstName', 'lastName', 'phone', 'age', 'address', 'aadhar', 'pincode', 'email', 'password', 'confirmPassword'].map((field, idx) => (
              <input key={idx} type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
                name={field} placeholder={field.replace(/([A-Z])/g, ' $1')} value={signupData[field]} onChange={handleSignupChange} style={styles.input} required />
            ))}
            <button type="submit" style={styles.button}>Signup</button>
          </form>
        </div>
      )} */}
    </div>
  );
}

export default HomePage;

const styles = {
  container: {
    minHeight: '90vh',
    width: '95%',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    width: '100%',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: { height: '32px' },
  topButton: {
    marginLeft: '10px',
    padding: '10px 20px',
    backgroundColor: '#20cf37ff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    
  },
  splitLayout: {
  display: 'flex',
  width: '50%',
  height: '70vh',
  margin: '0 auto',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  borderRadius: '10px',
  overflow: 'hidden',
  backgroundColor: 'white',
  },
  leftPanel: {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffffff',
  padding: '20px 0px 20px 20px',
  backgroundColor: 'rgba(198, 198, 198, 0.8)', // 0.8 is 80% opaque
  


},

rightPanel: {
  flex: 1,
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
},
  // loginForm: {
    // width: '70%',
    // maxWidth: '350px',
  //   backgroundColor: '#fffefeff',
  //   padding: '30px',
  //   borderRadius: '12px',
  //   boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  // },
  centerBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 80px)',
  },
  form: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '40%',
    maxWidth: '400px',

  },
  input: {
    width: '90%',
    padding: '12px',
    margin: '8px 0',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  button: {
    width: '80%',
    padding: '12px',
    backgroundColor: '#148138ff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    // display: 'flex',
    // alignContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    alignSelf: 'center',
  },
};
