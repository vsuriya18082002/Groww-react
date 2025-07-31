import React, { useState } from 'react';

const Loans = () => {
  const [loans, setLoans] = useState([
    {
      type: 'Personal Loan',
      amount: 150000,
      interest: '11%',
      duration: '24 months',
      status: 'Approved',
    },
    {
      type: 'Education Loan',
      amount: 500000,
      interest: '8.5%',
      duration: '36 months',
      status: 'Pending',
    }
  ]);

  const [form, setForm] = useState({
    type: '',
    amount: '',
    interest: '',
    duration: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoans([...loans, { ...form, status: 'Pending' }]);
    setForm({ type: '', amount: '', interest: '', duration: '' });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Loans Dashboard</h2>

      {/* Loan Application */}
      <div style={{ marginBottom: '2rem', backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '10px' }}>
        <h4>Apply for a New Loan</h4>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
          <input type="text" name="type" placeholder="Loan Type (e.g. Home, Car)" value={form.type} onChange={handleChange} required />
          <input type="number" name="amount" placeholder="Loan Amount" value={form.amount} onChange={handleChange} required />
          <input type="text" name="interest" placeholder="Interest Rate (%)" value={form.interest} onChange={handleChange} required />
          <input type="text" name="duration" placeholder="Duration (e.g. 12 months)" value={form.duration} onChange={handleChange} required />
          <button type="submit" style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '0.6rem',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>Submit</button>
        </form>
      </div>

      {/* Existing Loans */}
      <div>
        <h4>Loan Summary</h4>
        {loans.map((loan, index) => (
          <div key={index} style={{
            marginBottom: '1rem',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <p><strong>Type:</strong> {loan.type}</p>
            <p><strong>Amount:</strong> ₹{loan.amount}</p>
            <p><strong>Interest:</strong> {loan.interest}</p>
            <p><strong>Duration:</strong> {loan.duration}</p>
            <p><strong>Status:</strong> {loan.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loans;
