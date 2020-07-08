import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
import './styles/App.css';
import Wrapper from './components/Wrapper';
import AppBar from './components/AppBar';
import Ballot from './pages/Ballot';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <Router>
      <div>
        <AppBar />
        <Wrapper>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <PrivateRoute exact path="/profile" component={Ballot} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
