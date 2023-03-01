// import LandingPage from './components/LandingPage/LandingPage';
import SideNav from './components/common/SideNav/SideNav';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className='App'>
      <div className='mainContent'>
        <header>
          <SideNav />
        </header>
        <main>
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;

