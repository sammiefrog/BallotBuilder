// importing necessary dependencies, components and styling
import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SammanthaCard from "../components/SammanthaCard";
import JoshCard from "../components/JoshCard";

const useStyles = makeStyles({
    header: {
        padding: "25px",
        margin: "20px",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    scard: {
        alignItems: "center",
        justifyContent: "center"
    }
});

// About page
const About = () => {
    const classes = useStyles();
    return (
        <Box className={classes.header}>
            <Typography variant="h2">About</Typography>
            <Typography variant="h6">
                In times of crisis, who we choose to lead is all the more consequential.
                Unfortunately, information on when, where and how to vote can be hard to find and
                even harder to remember. We created Ballot Builder for new and experienced Tennessee
                voters to learn more about candidates for federal office, build their preliminary
                ballot, and create a voting plan they can refer back to. For more info on absentee
                voting,{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://sos.tn.gov/products/elections/absentee-voting">
                    visit here.
                </a>{" "}
                To find your polling place,{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://web.go-vote-tn.elections.tn.gov/">
                    visit here.
                </a>{" "}
                Whether you binge news or are getting informed for the first time, voting is for
                everyone.
            </Typography>
            <Box
                display="flex"
                flexDirection="row"
                p={1}
                m={1}
                bgcolor="background.paper"
                className={classes.scard}>
                <SammanthaCard />
                <JoshCard />
            </Box>
        </Box>
    );
};

// exporting page to be used in other parts of the application
export default About;
