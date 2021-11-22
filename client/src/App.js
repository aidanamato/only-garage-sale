import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import ReactDOM from 'react-dom';
// import { StyledEngineProvider } from '@mui/material/styles';

import './App.css';

// components
import Navbar from './components/Navbar';

// pages
import Search from './pages/Search';
import Login from './pages/Login';
import Settings from './pages/Settings';
import NoMatch from './pages/NoMatch';

// ReactDOM.render(
//   <StyledEngineProvider injectFirst>
//     <Demo />
//   </StyledEngineProvider>,
//   document.querySelector("#root")
// );

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Search/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/settings" element={<Settings/>} />
          <Route component={<NoMatch/>} />
        </Routes>
    </Router>
  );
}

export default App;
