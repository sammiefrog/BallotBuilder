// importing necessary dependencies and styling
import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../context/contexts/UserContext";
import SendLoginInfo from "./action";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "35ch"
        }
    },
    button: {
        "& > *": {
            margin: theme.spacing(1)
        },
        marginRight: "15px"
    },
    container: {
        margin: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}));

// login form
const LoginForm = () => {
    const classes = useStyles();
    const { user, dispatch } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const auth = user.loggedIn;
    const message = user.message;
    let content;
    console.log(message)

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const response = await SendLoginInfo(username, password);
            dispatch({
                type: "LOGIN_SUCCEEDED",
                payload: { token: response.data.token }
            });
        } catch (error) {
            dispatch({
                type: "LOGIN_FAILED",
                payload: { error: error.response.data, message: "Login Failed! Please Try Again." }
            });
            setPassword("");
        }
    };

    auth
        ? (content = <Redirect to="/ballot" />)
        : (content = (
              <Container className={classes.container}>
                  <form onSubmit={handleFormSubmit} noValidate autoComplete="off">
                      <Box>
                          <TextField
                              className={classes.root}
                              id="outlined-basic username"
                              label="Username"
                              value={username}
                              variant="outlined"
                              onChange={event => setUsername(event.target.value)}
                          />
                      </Box>
                      <Box>
                          <TextField
                              className={classes.root}
                              id="outlined-basic password"
                              label="Password"
                              type="password"
                              value={password}
                              variant="outlined"
                              onChange={event => setPassword(event.target.value)}
                          />
                      </Box>
                      <Box>
                          <Button
                              type="submit"
                              className={classes.button}
                              variant="contained"
                              color="secondary">
                              Login
                          </Button>
                          <Link href="/register" color="primary" variant="body2">
                              {"Don't have an account? Register Now!"}
                          </Link>
                          <Typography variant="subtitle2">{message}</Typography>
                      </Box>
                  </form>
              </Container>
          ));

    return <div>{content}</div>;
};

// exporting component to be used in other parts of the application
export default LoginForm;
