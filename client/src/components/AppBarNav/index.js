import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { UserContext } from "../../context/contexts/UserContext";
import Link from "@material-ui/icons/Link";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

const AppBarNav = () => {
    const classes = useStyles();
    const { user, dispatch } = useContext(UserContext);

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
            payload: { message: "Successfully Logged out!" }
        });
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {/* <Link href="/home" color='inherit'> */}
                            Ballot Builder TN
                            {/* </Link> */}
                    </Typography>
                    <Button color="inherit" href="/home">
                        Home
                    </Button>
                    <Button color="inherit" href="/ballot">
                        MyBallot
                    </Button>
                    <Button color="inherit" href="/about">
                        About
                    </Button>
                    {!user.loggedIn && (
                        <Button color="inherit" href="/login">
                            Login
                        </Button>
                    )}
                    {user.loggedIn && (
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppBarNav;
