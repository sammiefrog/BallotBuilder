import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBarNav from "./components/AppBarNav";
import Ballot from "./pages/Ballot";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserContext, UserContextProvider } from "./context/contexts/UserContext";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1769aa",
            dark: "#2c387e"
        },
        secondary: {
            main: "#ff3d00"
        }
    }
});

function App() {

    return (
        <ThemeProvider theme={theme}>
            <UserContextProvider>
                <UserContext.Consumer>
                    {({ user }) => {
                        return (
                            <Router>
                                <div>
                                    <AppBarNav />
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
                                        <Route exact path="/about" component={About} />
                                    </Switch>
                                </div>
                            </Router>
                        );
                    }}
                </UserContext.Consumer>
            </UserContextProvider>
        </ThemeProvider>
    );
}

export default App;
