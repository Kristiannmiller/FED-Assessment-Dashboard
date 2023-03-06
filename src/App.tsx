import React, { useState, useEffect } from 'react';
import { AppContext } from './contexts/App';
// import LandingPage from './components/LandingPage/LandingPage';
import SideNav from './components/common/SideNav/SideNav';
import TopNav from './components/common/TopNav/TopNav';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [screenWidth, getDimension] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const setDimension = () => {
    getDimension(window.innerWidth);
    setIsMobile(screenWidth <= 1024);
  };
  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenWidth]);

  return (
    <AppContext.Provider value={{ isMobile, setIsMobile }}>
      <div className='App'>
        <div className='mainContent'>
          <header>{isMobile ? <TopNav /> : <SideNav />}</header>
          <main>
            <Dashboard />
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;

