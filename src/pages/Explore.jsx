import React from 'react';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();

  const exploreItems = [
    { title: 'Stocks', description: 'Track and invest in top stocks', icon: '📈', path: '/stocks' },
    { title: 'F&O', description: 'Futures & Options trading insights', icon: '📊', path: '/fo' },
    { title: 'Mutual Funds', description: 'Diversify with mutual funds', icon: '💼', path: '/mutual-funds' },
    { title: 'UPI', description: 'Fast & secure payments', icon: '💳', path: '/upi' },
    { title: 'Loans', description: 'Easy personal loan options', icon: '🏦', path: '/loans' },
  ];

  const data = {
    gainers: [
      { name: 'Tata Motors', price: '₹900', change: '+3.5%' },
      { name: 'HDFC Bank', price: '₹1,700', change: '+2.8%' },
      { name: 'Infosys', price: '₹1,500', change: '+2.2%' },
      { name: 'ONGC', price: '₹190', change: '+1.9%' },
      { name: 'NTPC', price: '₹250', change: '+1.7%' },
      { name: 'Coal India', price: '₹300', change: '+1.6%' },
      { name: 'Axis Bank', price: '₹900', change: '+1.5%' },
      { name: 'SBI', price: '₹600', change: '+1.3%' },
      { name: 'ICICI Bank', price: '₹980', change: '+1.1%' },
      { name: 'L&T', price: '₹2,900', change: '+1.0%' },
    ],
    losers: [
      { name: 'Wipro', price: '₹410', change: '-2.3%' },
      { name: 'Tech Mahindra', price: '₹1,150', change: '-1.9%' },
      { name: 'Dr Reddy’s', price: '₹4,800', change: '-1.7%' },
      { name: 'Bharti Airtel', price: '₹880', change: '-1.6%' },
      { name: 'Asian Paints', price: '₹3,100', change: '-1.5%' },
      { name: 'Nestle India', price: '₹22,000', change: '-1.3%' },
      { name: 'Titan', price: '₹3,200', change: '-1.2%' },
      { name: 'Maruti Suzuki', price: '₹10,200', change: '-1.1%' },
      { name: 'TCS', price: '₹3,400', change: '-1.0%' },
      { name: 'HUL', price: '₹2,500', change: '-0.9%' },
    ],
    intraday: [
      { name: 'Reliance', price: '₹2,500', change: '+1.5%' },
      { name: 'Tata Steel', price: '₹120', change: '+1.2%' },
      { name: 'Adani Ports', price: '₹800', change: '+1.1%' },
      { name: 'Power Grid', price: '₹240', change: '+1.0%' },
      { name: 'JSW Steel', price: '₹850', change: '+0.9%' },
      { name: 'IndusInd Bank', price: '₹1,200', change: '+0.8%' },
      { name: 'Grasim', price: '₹1,700', change: '+0.7%' },
      { name: 'Bajaj Finance', price: '₹6,900', change: '+0.6%' },
      { name: 'Hero MotoCorp', price: '₹3,100', change: '+0.5%' },
      { name: 'HCL Tech', price: '₹1,300', change: '+0.4%' },
    ],
    mtfEtf: [
      { name: 'NiftyBees', price: '₹210', change: '+0.5%' },
      { name: 'ICICI MTF', price: '₹190', change: '+0.4%' },
      { name: 'SBI Gold ETF', price: '₹50', change: '+0.3%' },
      { name: 'Kotak MTF', price: '₹180', change: '+0.2%' },
      { name: 'HDFC ETF', price: '₹220', change: '+0.2%' },
      { name: 'Axis ETF', price: '₹230', change: '+0.1%' },
      { name: 'Motilal Oswal ETF', price: '₹250', change: '+0.1%' },
      { name: 'UTI Nifty ETF', price: '₹260', change: '+0.1%' },
      { name: 'SBI Nifty ETF', price: '₹240', change: '+0.1%' },
      { name: 'ICICI Sensex ETF', price: '₹280', change: '+0.1%' },
    ],
    news: [
      { name: 'Adani Enterprises' },
      { name: 'Zomato' },
      { name: 'IRCTC' },
      { name: 'Paytm' },
      { name: 'Tata Elxsi' },
      { name: 'Delhivery' },
      { name: 'Nykaa' },
      { name: 'Vodafone Idea' },
      { name: 'Yes Bank' },
      { name: 'Indigo' },
    ],
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      {/* Left content */}
      <div style={{ flex: 3, padding: '2rem', overflowY: 'visible' }}>
        {/* Explore Cards */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {exploreItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '1rem',
                borderRadius: '10px',
                backgroundColor: '#f5f5f5',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                width: '150px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: '2rem' }}>{item.icon}</div>
              <h3 style={{ margin: '0.5rem 0' }}>{item.title}</h3>
              <p style={{ fontSize: '0.8rem', color: '#555' }}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stock Sections */}
        {Object.entries(data).map(([section, stocks], idx) => (
          <div key={idx} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{section.toUpperCase()}</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '1rem',
            }}>
              {stocks.map((stock, i) => (
                <div key={i} style={{
                  padding: '1rem',
                  background: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                }}>
                  <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{stock.name}</div>
                  {stock.price && <div style={{ fontSize: '13px' }}>{stock.price}</div>}
                  {stock.change && (
                    <div style={{
                      fontSize: '13px',
                      fontWeight: 'bold',
                      marginTop: '5px',
                      color: stock.change.includes('-') ? 'red' : 'green',
                    }}>{stock.change}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div style={{ flex: 1, borderLeft: '1px solid #ddd', padding: '2rem', background: '#fafafa' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Your Investments</h3>
        <div style={{
          padding: '10px',
          background: '#fff',
          borderRadius: '8px',
          marginBottom: '30px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
        }}>
          <p>Portfolio Value: ₹1,25,000</p>
          <p>Returns: <span style={{ color: 'green' }}>+12.5%</span></p>
        </div>

        <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Products & Tools</h3>
        <ul style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '2' }}>
          {exploreItems.map((item, i) => (
            <li key={i}>{item.icon} {item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Explore;
