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
        background: theme.palette.primary.light,
        color: "black",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "55px"
        },
        [theme.breakpoints.down("lg")]: {
            marginBottom: "55px"
        }
    },
    media: {
        height: "350px",
        paddingTop: "56.25%"
    },
    avatar: {
        backgroundColor: theme.palette.secondary.light
    }
}));

export default function JoshCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        J
                    </Avatar>
                }
                title="Josh Everett"
                subheader="Web Developer Trying to Make them Full Stacks"
            />
            <CardMedia
                className={classes.media}
                image={require("../../assets/images/me.png")}
                title="Josh"
            />
            <CardContent>
                <Typography variant="body2" color="black" component="p">
                    Whoa there! You registered to vote right? I started voting because I'm a Black
                    man from the Deep South, and will continue to vote for the remainder of my
                    membership in this race. I hope you have a reason to do the same. Keepin' it
                    civic. No Honda.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="email"
                    href="mailto:josheverett93@gmail.com"
                    target="_blank">
                    <MailOutlineIcon />
                </IconButton>
                <IconButton
                    aria-label="github"
                    href="https://github.com/jeverett93"
                    target="_blank">
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    aria-label="linkedin"
                    href="https://www.linkedin.com/in/joshua-everett-087a4649/"
                    target="_blank">
                    <LinkedInIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
