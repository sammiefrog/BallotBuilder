import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../../context/contexts/UserContext";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: "10px",
        border: "double",
        borderColor: "#ff3d00"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    },
    button: {
        fontSize: 14
    }
});

function OutlinedCard(props) {
    const classes = useStyles();
    const { user } = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    //snackbar
    const [open, setOpen] = React.useState(false);

    const loggedInClickHandler = async () => {
        try {
            await setOpen(true);
            props.action();
        } catch (error) {
            console.log(error);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    if (redirect) {
        return <Redirect to="/login" />;
    } else {
        return (
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" color="primary" gutterBottom>
                        {props.candidateName}
                    </Typography>
                    <Typography className={classes.title} color="secondary">
                        Party: {props.candidateParty}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link
                        className={classes.button}
                        component="button"
                        onClick={user.loggedIn ? loggedInClickHandler : () => setRedirect(true)}
                        size="small">
                        {props.btncontent}
                    </Link>
                    <Snackbar
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                        open={open}
                        onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Success!
                        </Alert>
                    </Snackbar>
                    <Link
                        className={classes.button}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={props.coreValues}
                        size="small">
                        Learn More About Their Values
                    </Link>
                </CardActions>
            </Card>
        );
    }
}
export default OutlinedCard;
