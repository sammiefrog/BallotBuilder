import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import { UserContext } from "../../context/contexts/UserContext";
import { Menu } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.down("sm")]: {
            fontSize: 10
        }
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    spacing: {
        flexGrow: 1
    },
    title: {
        fontSize: 20,
        [theme.breakpoints.down("xs")]: {
            fontSize: 15
        }
    }
}));

const AppBarNav = props => {
    const classes = useStyles();
    const { user, dispatch } = useContext(UserContext);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                        aria-label="menu"
                        onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    {/* menu for when on a small screen */}
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        <MenuItem component="button" href="/ballot" onClick={handleClose}>
                            MyBallot
                        </MenuItem>
                        <MenuItem component="button" href="/about" onClick={handleClose}>
                            About
                        </MenuItem>
                        {!user.loggedIn && (
                            <MenuItem component="button" href="/login" onClick={handleClose}>
                                Login
                            </MenuItem>
                        )}
                        {user.loggedIn && (
                            <MenuItem component="button" onClick={handleLogout}>
                                Logout
                            </MenuItem>
                        )}
                    </Menu>

                    <Typography variant="h6" className={classes.spacing}>
                        <Button color="inherit" href="/home" className={classes.title}>
                            Tennessee Ballot Builder
                        </Button>
                    </Typography>
                    <Hidden only="xs">
                        <Button color="inherit" href="/home">
                            Home
                        </Button>
                    </Hidden>
                    <Hidden only="xs">
                        <Button color="inherit" href="/ballot">
                            MyBallot
                        </Button>
                    </Hidden>
                    <Hidden only="xs">
                        <Button color="inherit" href="/about">
                            About
                        </Button>
                    </Hidden>
                    {!user.loggedIn && (
                        <Hidden only="xs">
                            <Button color="inherit" href="/login">
                                Login
                            </Button>
                        </Hidden>
                    )}
                    {user.loggedIn && (
                        <Hidden only="xs">
                            <Button color="inherit" onClick={handleLogout}>
                                Logout
                            </Button>
                        </Hidden>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

AppBarNav.propTypes = {
    width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};

export default AppBarNav;
