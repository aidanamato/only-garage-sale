import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';

// components
// import Nav from './components/Nav';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Settings from './pages/Settings';
import NoMatch from './pages/NoMatch';


function App() {
  return (
    <Router>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/settings" element={<Settings/>} />
          <Route component={<NoMatch/>} />
        </Routes>
      
    </Router>
  );
}

export default App;
