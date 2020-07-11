import React, { useContext, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

// where election info goes
// put centered tab on home page
// each election in a different component that is rendered on click
// candidates in small cards
// electiondata component - container - 3 of them (President, Senate, House)
// card component - map when I bring into election data
// around each card is a box and around the box is a grid list
// keep box in card component and grid list in container component

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <h1>Home Page</h1>
            <Paper className={classes.root}>
                <Tabs
                    // value={value}
                    // onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Presidential Election" />
                    <Tab label="Senate Election" />
                    <Tab label="House Election" />
                </Tabs>
            </Paper>
        </div>
    );
}

export default Home;