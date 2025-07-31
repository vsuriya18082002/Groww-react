import React from 'react';

const Holdings = () => {
  const holdings = [
    { name: 'Tata Motors', quantity: 20, price: 840 },
    { name: 'Infosys', quantity: 15, price: 1480 },
    { name: 'Reliance', quantity: 10, price: 2780 },
    { name: 'HDFC Bank', quantity: 25, price: 1620 },
    { name: 'ICICI Bank', quantity: 30, price: 950 },
    { name: 'Wipro', quantity: 40, price: 420 },
    { name: 'TCS', quantity: 12, price: 3800 },
    { name: 'Axis Bank', quantity: 18, price: 970 },
    { name: 'Maruti Suzuki', quantity: 8, price: 10800 },
    { name: 'Hindustan Unilever', quantity: 14, price: 2600 },
    { name: 'ONGC', quantity: 35, price: 195 },
    { name: 'NTPC', quantity: 22, price: 285 },
  ];

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f9fafb',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      margin: '20px',
      fontFamily: 'Arial, sans-serif',
      overflowX: 'auto'
    }}>
      <h2 style={{
        marginBottom: '16px',
        fontSize: '24px',
        color: '#1f2937',
        textAlign: 'center'
      }}>Holdings</h2>

      <table style={{
        width: '100%',
        minWidth: '600px',
        borderCollapse: 'collapse',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <thead style={{ backgroundColor: '#e5e7eb' }}>
          <tr>
            <th style={tableHeader}>Stock</th>
            <th style={tableHeader}>Quantity</th>
            <th style={tableHeader}>Price (₹)</th>
            <th style={tableHeader}>Total Value (₹)</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((item, index) => (
            <tr key={index} style={{ textAlign: 'center', borderBottom: '1px solid #f3f4f6' }}>
              <td style={tableCell}>{item.name}</td>
              <td style={tableCell}>{item.quantity}</td>
              <td style={tableCell}>{item.price}</td>
              <td style={tableCell}>{item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeader = {
  padding: '12px',
  fontWeight: 'bold',
  color: '#374151',
  fontSize: '16px',
  borderBottom: '2px solid #d1d5db'
};

const tableCell = {
  padding: '12px',
  color: '#111827',
  fontSize: '15px'
};

export default Holdings;
