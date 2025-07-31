import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Stock from '../pages/Stocks';
import Fo from '../pages/FO';
import MutualFunds from '../pages/MutualFunds';   
import UPI from '../pages/UPI';
import Loans from '../pages/Loans';
import SignupPage from '../pages/SignupPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stocks" element={<Stock />} />
        <Route path="/fo" element={<Fo />} />
        <Route path="/mutual-funds" element={<MutualFunds />} />
        <Route path="/upi" element={<UPI />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
