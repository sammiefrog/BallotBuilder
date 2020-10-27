// importing necessary dependencies and styling
import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../context/contexts/UserContext";
import { SendRegistration } from "./action";
import { Typography } from "@material-ui/core";

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
        }
    },
    container: {
        margin: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}));

// login form
const RegistrationForm = () => {
    const { user, dispatch } = useContext(UserContext);
    const classes = useStyles();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [match, setMatch] = useState("");

    const authorized = user.loggedIn;
    const registered = user.registered;
    let message = user.message;
    let content;

    const handleFormSubmit = async event => {
        event.preventDefault();

        if (password === match) {
            try {
                const response = await SendRegistration(username, password);
                dispatch({
                    type: "REGISTRATION_SUCCEEDED",
                    payload: { token: response.data.token, message: "Thanks for Registering!" }
                });
            } catch (error) {
                console.log(error);
                dispatch({
                    type: "REGISTRATION_FAILED",
                    payload: {
                        error: error.response.data,
                        message: "Registration failed, please try again!"
                    }
                });
                setPassword("");
            }
        } else {
            dispatch({
                type: "REGISTRATION_FAILED",
                payload: { message: "Passwords dont match!" }
            });
            setPassword("");
            setMatch("");
        }
    };

    if (authorized) {
        content = <Redirect to="/ballot" />;
    } else if (registered) {
        content = <Redirect to="/login" />;
    } else {
        content = (
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
                        <TextField
                            className={classes.root}
                            id="outlined-basic match"
                            label="Re-enter Password"
                            value={match}
                            type="password"
                            variant="outlined"
                            onChange={event => setMatch(event.target.value)}
                        />
                    </Box>
                    <Box>
                        <Button
                            type="submit"
                            className={classes.button}
                            variant="contained"
                            color="secondary">
                            Register!
                        </Button>
                        <Typography variant="subtitle2">{message}</Typography>
                    </Box>
                </form>
            </Container>
        );
    }

    return <div>{content}</div>;
};

// exporting component to be used in other parts of the application
export default RegistrationForm;
