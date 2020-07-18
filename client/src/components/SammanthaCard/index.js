import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 500,
        maxHeight: 900,
        height: 900,
        justifyContent: "center",
        margin: "25px",
        background: "#33c9dc",
        [theme.breakpoints.down("sm")]: {
            backgroundColor: theme.palette.secondary.main,
            marginBottom: "55px"
        },
        [theme.breakpoints.down("lg")]: {
            backgroundColor: "#33c9dc",
            marginBottom: "55px"
        }
    },
    media: {
        height: "350px",
        paddingTop: "56.25%"
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)",
        marginBottom: "20px"
    },
    avatar: {
        backgroundColor: "#f73378"
    }
}));

export default function SammanthaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        S
                    </Avatar>
                }
                title="Sammantha Marie Sasenick"
                subheader="Full Stack Web Developer"
            />
            <CardMedia
                className={classes.media}
                image={require("../../assets/images/sammanthaface.jpg")}
                title="Sammantha"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    For the past five years I have been a resident of Nashville, TN. Recently, I
                    obtained a Coding Bootcamp Certificate from Vanderbilt University. I am now a
                    Full-Stack Web Developer specializing in the MERN Stack.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="email" href="mailto:ssasenick412@gmail.com" target="_blank">
                    <MailOutlineIcon />
                </IconButton>
                <IconButton
                    aria-label="github"
                    href="https://github.com/sammiefrog"
                    target="_blank">
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    aria-label="linkedin"
                    href="https://www.linkedin.com/in/sammantha-sasenick412/"
                    target="_blank">
                    <LinkedInIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
