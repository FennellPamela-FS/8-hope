import React from 'react';
import { Routes, Route } from "react-router-dom";
import DashHeader from './components/DashHeader';
import DashNav from './components/DashNav';
import Dashboard from './pages/Dashboard';
import "./App.css";
import Reports from './pages/Reports';
import Income from './pages/Income';
import Savings from './pages/Savings';
import Spending from './pages/Spending';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <DashHeader />
      <main style={styles.container}>
        <DashNav style={styles.nav} />
        <section>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reports" element={<Reports />} />
            <Route path="income" element={<Income />} />
            <Route path="savings" element={<Savings />} />
            <Route path="spending" element={<Spending />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'whiteSmoke',
    color: '',
    height: 'autovh'
  },
  logo: {
    width: '50px',
    height: '50px',
  },
  left: {
    minWidth: '10%',
  },
  nav: {
    display: 'flex',
  },
  main: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    minWidth: '30%',
    padding: '2rem',
  },
  right: {
    minWidth: '10%',
  },
  myPost: {
    display: 'flex',
    flexDirection: 'row',
  }

}