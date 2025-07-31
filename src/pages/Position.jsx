import React from 'react';

const Position = () => {
  const positions = [
    { stock: 'Tata Motors', avgPrice: 820, ltp: 840, quantity: 20 },
    { stock: 'Infosys', avgPrice: 1500, ltp: 1480, quantity: 15 },
    { stock: 'Reliance', avgPrice: 2750, ltp: 2780, quantity: 10 },
  ];

  return (
    <div style={container}>
      <h2 style={heading}>Positions</h2>

      <table style={table}>
        <thead style={{ backgroundColor: '#e5e7eb' }}>
          <tr>
            <th style={th}>Stock</th>
            <th style={th}>Avg. Price</th>
            <th style={th}>LTP</th>
            <th style={th}>Qty</th>
            <th style={th}>P&L</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((item, index) => {
            const pnl = ((item.ltp - item.avgPrice) * item.quantity).toFixed(2);
            const pnlColor = item.ltp >= item.avgPrice ? '#059669' : '#dc2626';

            return (
              <tr key={index} style={tr}>
                <td style={td}>{item.stock}</td>
                <td style={td}>₹{item.avgPrice}</td>
                <td style={td}>₹{item.ltp}</td>
                <td style={td}>{item.quantity}</td>
                <td style={{ ...td, color: pnlColor }}>₹{pnl}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Inline Styles
const container = {
  padding: '20px',
  backgroundColor: '#f9fafb',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  margin: '20px',
  fontFamily: 'Arial, sans-serif',
};

const heading = {
  marginBottom: '16px',
  fontSize: '24px',
  color: '#1f2937',
};

const table = {
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  overflow: 'hidden',
};

const th = {
  padding: '12px',
  fontWeight: 'bold',
  fontSize: '16px',
  color: '#374151',
  textAlign: 'center',
};

const td = {
  padding: '12px',
  fontSize: '15px',
  color: '#111827',
  textAlign: 'center',
};

const tr = {
  borderBottom: '1px solid #f3f4f6',
};

export default Position;
