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
        marginBottom: 20
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.home}>
                <Typography variant="h2">Home Page</Typography>
                <Typography variant="h6">
                    Welcome to Tennessee Ballot Builder. We're here to help you plan for future
                    elections. You can view candidates for federal office as they will appear on
                    your future ballot. There's also an opportunity to learn more about candidate
                    values. To further personalize your experience, log in and to save preferred
                    candidates and create a voting plan.
                </Typography>
            </Box>
            <TabPanel />
        </div>
    );
};

export default Home;
