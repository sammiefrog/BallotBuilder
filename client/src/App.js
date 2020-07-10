import React, { useContext, useReducer, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/App.css';
import Wrapper from './components/Wrapper';
import AppBar from './components/AppBar';
import Ballot from './pages/Ballot';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from "./utils/PrivateRoute";
import { UserContext, UserContextProvider } from './context/UserContext';
import { UserReducer } from './context/UserReducer';

function App() {
  const [ state, dispatch ] = useContext(UserContext);
  console.log(state);

  return (
    <UserContextProvider>
      <Router>
        <div>
          <AppBar />
          <Wrapper>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/ballot" component={Ballot} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Wrapper>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
