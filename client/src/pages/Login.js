import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "../components/LoginForm";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    typography: {
        marginTop: "20px"
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // textAlign: 'center'
    },
    registerButton: {
        marginLeft: 10,
    }
}));

const Login = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Box className={classes.typography}>
                <Typography align="center" variant="h3" color="secondary">
                    Login to create or view your ballot!
                </Typography>
            </Box>
            <LoginForm />
        </Container>
    );
};

export default Login;
