import React from 'react';

const Stocks = () => {
  const stocks = [
    { name: 'NIFTY 50', price: 22200.55, change: '+0.85%' },
    { name: 'SENSEX', price: 74510.12, change: '+0.62%' },
    { name: 'BANK NIFTY', price: 48900.77, change: '-0.21%' },
    { name: 'TATA MOTORS', price: 955.20, change: '+1.2%' },
    { name: 'INFY', price: 1499.10, change: '-0.5%' },
    { name: 'WIPRO', price: 420.75, change: '+0.3%' },
    { name: 'HCLTECH', price: 1288.45, change: '+0.9%' },
    { name: 'HDFC BANK', price: 1622.55, change: '-0.6%' },
    { name: 'ICICI BANK', price: 992.80, change: '+1.1%' },
    { name: 'AXIS BANK', price: 1095.60, change: '-0.3%' },
    { name: 'SBI', price: 671.25, change: '+0.4%' },
    { name: 'ONGC', price: 184.30, change: '+0.2%' },
    { name: 'RELIANCE', price: 2845.75, change: '+0.7%' },
    { name: 'ADANI PORTS', price: 1360.60, change: '+1.5%' },
    { name: 'ADANI ENTERPRISES', price: 2940.50, change: '-1.0%' },
    { name: 'TCS', price: 3935.10, change: '+0.6%' },
    { name: 'JSW STEEL', price: 894.20, change: '-0.8%' },
    { name: 'COAL INDIA', price: 472.15, change: '+0.2%' },
    { name: 'BPCL', price: 585.10, change: '+0.1%' },
    { name: 'IOC', price: 155.75, change: '-0.4%' },
    { name: 'ULTRATECH CEMENT', price: 9510.90, change: '+0.3%' },
    { name: 'ASIAN PAINTS', price: 3055.40, change: '-0.6%' },
    { name: 'ITC', price: 440.00, change: '+0.9%' },
    { name: 'LT', price: 3710.15, change: '-0.2%' },
    { name: 'SUN PHARMA', price: 1225.20, change: '+0.7%' },
    { name: 'CIPLA', price: 1250.65, change: '-0.5%' },
    { name: 'BAJAJ FINANCE', price: 7600.75, change: '+1.3%' },
    { name: 'HINDUNILVR', price: 2655.25, change: '-0.4%' },
    { name: 'POWER GRID', price: 274.40, change: '+0.5%' },
    { name: 'MARUTI', price: 12300.95, change: '+0.6%' },
    { name: 'NTPC', price: 355.15, change: '+0.8%' },
    { name: 'TECH MAHINDRA', price: 1355.25, change: '-0.7%' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Live Stock Data</h2>
      <div style={styles.grid}>
        {stocks.map((stock, index) => (
          <div key={index} style={styles.card}>
            <h3>{stock.name}</h3>
            <p>₹ {stock.price.toFixed(2)}</p>
            <p
              style={{
                color: stock.change.startsWith('+') ? 'green' : 'red',
                fontWeight: 'bold',
              }}
            >
              {stock.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f2f2',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2rem',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
};

export default Stocks;
