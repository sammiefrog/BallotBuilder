import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { UserContext } from "../../context/contexts/UserContext";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: "10px"
    },
    media: {
        height: 140
    }
});

export default function MediaCard(props) {
    const classes = useStyles();
    const { user } = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Redirect to="/login" />;
    } else {
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.candidatePhoto}
                        title={props.candidateName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.candidateName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Candidate Party: {props.candidateParty}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link
                        component="button"
                        onClick={user.loggedIn ? props.action : () => setRedirect(true)}
                        size="medium"
                        color="primary">
                        {props.btncontent}
                    </Link>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={props.coreValues}
                        size="medium"
                        color="primary">
                        Learn More About Their Values
                    </Link>
                </CardActions>
            </Card>
        );
    }
}
