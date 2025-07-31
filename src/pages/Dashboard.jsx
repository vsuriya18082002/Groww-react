import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Explore from './Explore';
import Holdings from './Holdings';
import Position from './Position';
import Order from './Order';
import Watchlist from './Watchlist';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Explore');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Explore': return <Explore />;
      case 'Holdings': return <Holdings/>;
      case 'Positions': return <Position/>;
      case 'Orders': return <Order/>;
      case 'Watchlist': return <Watchlist/>;
      default: return null;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' , paddingTop: '160px' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={{ flex: 1 }}>
        {renderTabContent()}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
