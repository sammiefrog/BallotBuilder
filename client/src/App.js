import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/App.css';
import Wrapper from './components/Wrapper';
import AppBarNav from './components/AppBarNav';
import Ballot from './pages/Ballot';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register";
import { UserContext, UserContextProvider } from './context/contexts/UserContext';

function App() {

  return (
    <UserContextProvider>
      <UserContext.Consumer>
        {({ user }) => {
          console.log(user);
          return (
            <Router>
              <div>
                <AppBarNav />
                <Wrapper>
                  <Switch>
                    <Route exact path={["/", "/home"]} component={Home} />
                    {user.loggedIn && (
                      <Route exact path="/ballot" component={Ballot} />
                    )}
                    {!user.loggedIn && (
                      <Route exact path="/ballot" component={Login} />
                    )}
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                  </Switch>
                </Wrapper>
              </div>
            </Router>
          );
        }}
      </UserContext.Consumer>
    </UserContextProvider>
  );
}

export default App;
