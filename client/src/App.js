import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD

// import ReactDOM from 'react-dom';
// import { StyledEngineProvider } from '@mui/material/styles';

// components
import Navbar from './components/Navbar';

import { PageProvider } from './utils/GlobalState';

import './App.css';

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
