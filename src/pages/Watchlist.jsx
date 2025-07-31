import React from 'react';

const Watchlist = () => {
  const stocks = [
    { name: 'Infosys', price: 1510.25, change: '+1.2%' },
    { name: 'Reliance', price: 2620.10, change: '-0.8%' },
    { name: 'Bajaj Finserv', price: 1680.40, change: '+0.5%' },
    { name: 'Adani Ports', price: 880.10, change: '-1.1%' },
  ];

  return (
    <div style={container}>
      <h2 style={heading}>Watchlist</h2>

      <div style={cardContainer}>
        {stocks.map((stock, index) => {
          const isPositive = stock.change.startsWith('+');
          const changeColor = isPositive ? '#16a34a' : '#dc2626';

          return (
            <div key={index} style={card}>
              <h3 style={stockName}>{stock.name}</h3>
              <p style={stockPrice}>₹{stock.price}</p>
              <p style={{ ...stockChange, color: changeColor }}>{stock.change}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Inline styles
const container = {
  padding: '20px',
  backgroundColor: '#f9fafb',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  margin: '20px',
  fontFamily: 'Arial, sans-serif',
};

const heading = {
  fontSize: '24px',
  marginBottom: '20px',
  color: '#1f2937',
};

const cardContainer = {
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
};

const card = {
  backgroundColor: '#ffffff',
  padding: '16px',
  borderRadius: '10px',
  width: '180px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  textAlign: 'center',
};

const stockName = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#111827',
  marginBottom: '8px',
};

const stockPrice = {
  fontSize: '16px',
  color: '#374151',
  marginBottom: '4px',
};

const stockChange = {
  fontSize: '14px',
  fontWeight: 'bold',
};

export default Watchlist;
