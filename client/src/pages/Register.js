// importing necessary dependencies, components and styling
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RegisterForm from "../components/RegisterForm";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    typography: {
        marginTop: "20px"
    }
}));

// Register Page
const Register = () => {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.typography}>
                <Typography align="center" variant="h3" color="secondary">
                    Register to create a sample ballot!
                </Typography>
            </Box>
            <RegisterForm />
        </div>
    );
};

// exporting page to be used in other parts of the application
export default Register;
