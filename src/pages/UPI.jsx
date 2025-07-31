import React, { useState } from 'react';

const UPI = () => {
  const [upiList, setUpiList] = useState([
    { name: "Suriya", upi: "suriya@ybl" },
    { name: "Grow Market", upi: "grow@icici" },
  ]);

  const [newUpi, setNewUpi] = useState("");

  const handleAddUpi = () => {
    if (newUpi.trim()) {
      setUpiList([...upiList, { name: "New User", upi: newUpi }]);
      setNewUpi("");
    }
  };

  const recentTransactions = [
    { id: "TXN123", amount: "₹1,500", status: "Success", date: "28 July" },
    { id: "TXN456", amount: "₹3,200", status: "Pending", date: "27 July" },
    { id: "TXN789", amount: "₹800", status: "Failed", date: "26 July" },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>UPI Payment</h2>

      {/* UPI Linked Accounts */}
      <div style={{ marginBottom: '2rem' }}>
        <h4>Linked UPI IDs</h4>
        {upiList.map((item, index) => (
          <div key={index} style={{
            padding: '0.5rem 1rem',
            margin: '0.5rem 0',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
          }}>
            <strong>{item.name}</strong> - {item.upi}
          </div>
        ))}

        {/* Add UPI */}
        <div style={{ marginTop: '1rem' }}>
          <input
            type="text"
            placeholder="Enter new UPI ID"
            value={newUpi}
            onChange={(e) => setNewUpi(e.target.value)}
            style={{ padding: '0.5rem', marginRight: '0.5rem' }}
          />
          <button onClick={handleAddUpi} style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>Add</button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h4>Recent UPI Transactions</h4>
        {recentTransactions.map((txn, i) => (
          <div key={i} style={{
            padding: '1rem',
            marginBottom: '0.8rem',
            backgroundColor: '#fff',
            border: '1px solid #eee',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <p><strong>Transaction ID:</strong> {txn.id}</p>
            <p><strong>Amount:</strong> {txn.amount}</p>
            <p><strong>Status:</strong> {txn.status}</p>
            <p><strong>Date:</strong> {txn.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UPI;
