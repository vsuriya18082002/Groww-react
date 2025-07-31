import React from 'react';

const FO = () => {
  const foData = Array.from({ length: 35 }, (_, i) => ({
    symbol: `F&O ${i + 1}`,
    ltp: (Math.random() * 1000 + 100).toFixed(2),
    change: (Math.random() * 20 - 10).toFixed(2),
    volume: Math.floor(Math.random() * 1000000),
  }));

  return (
    <div style={{ padding: '2rem', overflowX: 'auto' }}>
      <h2 style={{ marginBottom: '1rem', color: '#333' }}>Futures & Options (F&O)</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#007bff', color: '#fff' }}>
            <th style={thStyle}>Symbol</th>
            <th style={thStyle}>LTP</th>
            <th style={thStyle}>Change</th>
            <th style={thStyle}>Volume</th>
          </tr>
        </thead>
        <tbody>
          {foData.map((fo, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td style={tdStyle}>{fo.symbol}</td>
              <td style={tdStyle}>{fo.ltp}</td>
              <td style={{ ...tdStyle, color: parseFloat(fo.change) >= 0 ? 'green' : 'red' }}>
                {fo.change}%
              </td>
              <td style={tdStyle}>{fo.volume.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: '0.75rem',
  border: '1px solid #ddd',
  textAlign: 'left',
};

const tdStyle = {
  padding: '0.75rem',
  border: '1px solid #ddd',
};

export default FO;
