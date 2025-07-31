import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      marginBottom: '10px',
      textAlign: 'center',
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '12px 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '14px',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      flexWrap: 'wrap'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        maxWidth: '1000px',
        width: '100%',
      }}>
        <span>Stocks</span>
        <span>F&O</span>
        <span>Mutual Funds</span>
        <span>Intraday</span>
        <span>MTF/ETFs</span>
        <span>UPI</span>
        <span>Loans</span>
      </div>
    </footer>
  );
};

export default Footer;
