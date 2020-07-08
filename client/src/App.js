import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import './styles/App.css';
import Wrapper from './components/Wrapper';
import AppBar from './components/AppBar';

function App() {
  return (
    <Router>
    <div>
    <AppBar />
    <Wrapper>
      
    </Wrapper>
    </div>
    </Router>
  );
}

export default App;
