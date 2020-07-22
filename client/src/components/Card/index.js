import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../../context/contexts/UserContext";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: "10px",
        border: "double blue"
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

    if (redirect) {
        return <Redirect to="/login" />;
    } else {
        return (
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2" color="primary" gutterBottom>
                        {props.candidateName}
                    </Typography>
                    <Typography className={classes.title} color="primary">
                        Party: {props.candidateParty}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link
                        className={classes.button}
                        component="button"
                        onClick={user.loggedIn ? props.action : () => setRedirect(true)}
                        size="small">
                        {props.btncontent}
                    </Link>
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
