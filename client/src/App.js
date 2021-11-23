import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';

import { PageProvider } from './utils/GlobalState';

import './App.css';

// pages
import Search from './components/Search/Search';
import Login from './pages/Login';
import Settings from './pages/Settings';
import NoMatch from './pages/NoMatch';


function App() {
  return (
    <Router>
      <PageProvider>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Search/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/settings" element={<Settings/>} />
            <Route path="*" element={<NoMatch/>} />
          </Routes>
      </PageProvider>
    </Router>
  );
}

export default App;
