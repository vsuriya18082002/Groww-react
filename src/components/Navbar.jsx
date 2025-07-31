import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import growLogo from '../assets/growlogo.png';

const Navbar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate(); 

  const tabItems = ['Explore', 'Holdings', 'Positions', 'Orders', 'Watchlist'];

  return (
    <div style={styles.navbarWrapper}>
      {/* Top Nav */}
      <div style={styles.topNav}>
        <div style={styles.leftSection}>
          <img src={growLogo} alt="Groww Logo" style={{ width: '40px', height: '40px',  borderRadius: '100px' }} />
          <span style={styles.navItem} onClick={() => navigate('/stocks')}>Stocks</span>
          <span style={styles.navItem} onClick={() => navigate('/fo')}>F&O</span>
          <span style={styles.navItem} onClick={() => navigate('/mutual-funds')}>Mutual Funds</span>
        </div>

        <div style={styles.searchSection}>
          <input type="text" placeholder="Search ..." style={styles.searchInput} />
        </div>

        <div style={styles.rightSection}>
          <span role="img" aria-label="bell" style={styles.bell}>🔔</span>
          <span style={styles.badge}>5</span>
          <img src="https://i.pravatar.cc/30" alt="profile" style={styles.profile} />
        </div>
      </div>

      {/* Menu Tabs */}
      <div style={styles.menuNav}>
        {tabItems.map((tab) => (
          <span
            key={tab}
            style={activeTab === tab ? styles.activeTab : styles.menuItem}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Market Ticker */}
      <div style={styles.marketTicker}>
        <span><strong>NIFTY</strong> 24,821.10 <span style={styles.green}>140.20 (0.57%)</span></span>
        <span><strong>SENSEX</strong> 81,337.95 <span style={styles.green}>446.93 (0.55%)</span></span>
        <span><strong>BANKNIFTY</strong> 56,222.00 <span style={styles.green}>137.10 (0.24%)</span></span>
        <span><strong>MIDCPNIFTY</strong> 13,033.70 <span style={styles.green}>134.75 (1.04%)</span></span>
        <span><strong>FINNIFTY</strong> 26,700.00<span style={styles.green}>134.75 (1.04%)</span></span>
      </div>
    </div>
  );
};


const styles = {
  navbarWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    fontFamily: 'Arial, sans-serif',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#fff', // To prevent transparency on scroll
  },
  
      topNav: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 20px',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
      },
      leftSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      },
      navItem: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'white',
        cursor: 'pointer',
      },
      searchSection: {
        flex: 1,
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'right',
      },
      searchInput: {
        width: '40%',
        padding: '6px 10px',
        borderRadius: '6px',
        border: '1px solid #ccc',
      },
      rightSection: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        gap: '10px',
      },
      bell: {
        fontSize: '20px',
        cursor: 'pointer',
      },
      badge: {
        position: 'absolute',
        top: '-5px',
        right: '30px',
        backgroundColor: 'red',
        color: '#fff',
        fontSize: '12px',
        borderRadius: '50%',
        padding: '2px 6px',
      },
      profile: {
        height: '30px',
        width: '30px',
        borderRadius: '50%',
      },
      menuNav: {
        display: 'flex',
        gap: '20px',
        padding: '10px 20px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #eee',
      },
      activeTab: {
        fontWeight: 'bold',
        borderBottom: '2px solid #333',
        paddingBottom: '4px',
        cursor: 'pointer',
      },
      menuItem: {
        color: '#777',
        cursor: 'pointer',
      },
      marketTicker: {
        display: 'flex',
        gap: '30px',
        padding: '10px 20px',
        backgroundColor: '#fafafa',
        fontSize: '14px',
        flexWrap: 'wrap',
      },
      green: {
        color: 'green',
        marginLeft: '5px',
      },
      tabContent: {
        padding: '20px',
        fontSize: '16px',
        backgroundColor: '#fff',
      },
};

export default Navbar;
