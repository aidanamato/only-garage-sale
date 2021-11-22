import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageProvider } from './utils/GlobalState';

import './App.css';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Settings from './pages/Settings';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Router>
      <PageProvider>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/settings" element={<Settings/>} />
            <Route path="*" element={<NoMatch/>} />
          </Routes>
      </PageProvider>
    </Router>
  );
}

export default App;
