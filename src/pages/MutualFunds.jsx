import React from 'react';

const mutualFundData = [
  {
    name: "SBI Bluechip Fund",
    category: "Large Cap",
    returns: "12.8%",
    risk: "Moderate",
  },
  {
    name: "HDFC Small Cap Fund",
    category: "Small Cap",
    returns: "22.5%",
    risk: "High",
  },
  {
    name: "ICICI Prudential Balanced Advantage Fund",
    category: "Balanced",
    returns: "10.1%",
    risk: "Low",
  },
  {
    name: "Axis Midcap Fund",
    category: "Mid Cap",
    returns: "18.7%",
    risk: "Moderate",
  },
  {
    name: "UTI Nifty Index Fund",
    category: "Index Fund",
    returns: "11.3%",
    risk: "Low",
  },
  {
    name: "Mirae Asset Emerging Bluechip",
    category: "Multi Cap",
    returns: "19.4%",
    risk: "High",
  },
];

const MutualFunds = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Mutual Funds</h2>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        Explore top-performing mutual funds and start your investment journey.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem'
      }}>
        {mutualFundData.map((fund, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            backgroundColor: '#fff',
            transition: 'transform 0.2s ease',
          }}>
            <h3 style={{ marginBottom: '0.5rem' }}>{fund.name}</h3>
            <p><strong>Category:</strong> {fund.category}</p>
            <p><strong>Returns:</strong> {fund.returns}</p>
            <p><strong>Risk:</strong> {fund.risk}</p>
            <button style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Invest Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MutualFunds;
