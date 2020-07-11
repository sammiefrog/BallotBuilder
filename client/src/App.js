import React, { useContext, useReducer, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/App.css';
import Wrapper from './components/Wrapper';
import AppBarNav from './components/AppBarNav';
import Ballot from './pages/Ballot';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoute";
// import { UserContext, UserContextProvider } from './context/contexts/UserContext';
// import { UserReducer } from './context/reducers/UserReducer';

function App() {
  // const [ state, dispatch ] = useContext(UserContext);
  // console.log(state);

  return (
    <Router>
      <div>
        <AppBarNav />
        <Wrapper>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <PrivateRoute exact path="/ballot" component={Ballot} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
