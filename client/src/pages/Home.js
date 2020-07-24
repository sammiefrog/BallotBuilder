// importing necessary dependencies, components and styling
import React from "react";
import TabPanel from "../components/TabPanel";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    home: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 5,
        margin: 20
    }
});

// Home Page
const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Box border={1} borderColor="secondary.main" className={classes.home}>
                <Typography variant="h2">Welcome to Tennessee Ballot Builder!</Typography>
                <Typography variant="h6">
                    We're here to help you plan for future elections. You can view candidates for
                    federal office as they will appear on your future ballot. There's also an
                    opportunity to learn more about candidate values. To further personalize your
                    experience, log in and to save preferred candidates and create a voting plan.
                </Typography>
            </Box>
            <TabPanel />
        </div>
    );
};

// exporting page to be used in other parts of the application
export default Home;
