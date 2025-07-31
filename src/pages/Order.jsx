import React from 'react';

const Order = () => {
  const orders = [
    { stock: 'HDFC Bank', type: 'Buy', status: 'Executed', price: 1620, quantity: 10 },
    { stock: 'TCS', type: 'Sell', status: 'Pending', price: 3300, quantity: 5 },
    { stock: 'Zomato', type: 'Buy', status: 'Executed', price: 140, quantity: 100 },
  ];

  return (
    <div style={container}>
      <h2 style={heading}>Orders</h2>

      <table style={table}>
        <thead style={{ backgroundColor: '#e5e7eb' }}>
          <tr>
            <th style={th}>Stock</th>
            <th style={th}>Type</th>
            <th style={th}>Status</th>
            <th style={th}>Price</th>
            <th style={th}>Qty</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => {
            const statusColor =
              order.status === 'Executed'
                ? '#10b981'
                : order.status === 'Pending'
                ? '#f59e0b'
                : '#6b7280';

            const typeColor = order.type === 'Buy' ? '#2563eb' : '#ef4444';

            return (
              <tr key={index} style={tr}>
                <td style={td}>{order.stock}</td>
                <td style={{ ...td, color: typeColor }}>{order.type}</td>
                <td style={{ ...td, color: statusColor }}>{order.status}</td>
                <td style={td}>₹{order.price}</td>
                <td style={td}>{order.quantity}</td>
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

export default Order;
