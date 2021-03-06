// importing necessary dependencies and styling
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
        height: '100%',
        justifyContent: "center",
        margin: "25px",
        color: "black",
        background: theme.palette.primary.light,
        [theme.breakpoints.down("sm")]: {
            width: "400px",
            height: "100%"
        },
        [theme.breakpoints.down("md")]: {
            width: "400px",
            height: "100%"
        }
    },
    media: {
        height: "350px",
        paddingTop: "56.25%",
        [theme.breakpoints.down("sm")]: {
            height: "250px"
        }
    },
    avatar: {
        backgroundColor: theme.palette.secondary.light
    }
}));

// about card for Sammantha and exporting component
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
                <Typography variant="body2" color="black" component="p">
                    Hey! I finally registered to vote, not sure what took me so long but it's
                    2020... yanno. That motivated me to make an easy-to-use site where people can
                    simply access information and save their preferences, because voting can seem
                    overwhelming!
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
