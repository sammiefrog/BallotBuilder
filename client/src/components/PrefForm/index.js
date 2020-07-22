import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
import { UserContext } from "../../context/contexts/UserContext";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: "100%",
        margin: "10px"
    },
    textfields: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch"
        }
    },
    formControl: {
        margin: theme.spacing(3)
    },
    button: {
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    radio: {
        justifyContent: "center",
        alignItems: "center"
    }
}));

const PrefForm = () => {
    const classes = useStyles();
    const { user } = useContext(UserContext);
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState("");
    const [selectedValue, setSelectedValue] = useState(false);
    //for the returned plan
    const [voteDate, setVoteDate] = useState("");
    const [reminderWho, setReminderWho] = useState("");
    const [absentee, setAbsentee] = useState(false);
    const [content, setContent] = useState("");

    useEffect(() => {
        loadPlan();
    }, []);

    const savePlan = async () => {
        try {
            const save = await API.savePlan(user.token, {
                when: date,
                absentee: selectedValue,
                reminderWho: reminder
            });
            console.log(save);
            setSelectedValue(false);
            setDate("");
            setReminder("");
            loadPlan();
        } catch (err) {
            console.log(err);
        }
    };

    const loadPlan = async () => {
        try {
            const response = await API.getPlan(user.token);
            if (response.data.plan[0]) {
                console.log(response.data.plan[0]);
                setAbsentee(response.data.plan[0].absentee);
                setVoteDate(response.data.plan[0].when);
                setReminderWho(response.data.plan[0].reminderWho);

            } else if (response.data.plan === []) {
                setAbsentee("___");
                setVoteDate("___");
                setReminderWho("___");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container>
            <Box border={2} borderColor="secondary.main" className={classes.root}>
                <FormControl component="fieldset">
                    <Typography variant="h5">How are you voting?</Typography>
                    <RadioGroup
                        row
                        className={classes.radio}
                        aria-label="position"
                        name="position"
                        defaultValue="top">
                        <FormControlLabel
                            name="absentee"
                            control={
                                <Radio
                                    checked={selectedValue === true}
                                    onChange={e => setSelectedValue(!selectedValue)}
                                    value={selectedValue}
                                    color="primary"
                                />
                            }
                            label="Absentee"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            name="inperson"
                            control={
                                <Radio
                                    checked={selectedValue === false}
                                    onChange={e => setSelectedValue(!selectedValue)}
                                    value={selectedValue}
                                    color="primary"
                                />
                            }
                            label="In Person"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                    <div className={classes.textfields} noValidate autoComplete="off">
                        <Typography variant="h5">When will you vote?</Typography>
                        <TextField
                            onChange={e => setDate(e.target.value)}
                            value={date}
                            name="date"
                            id="outlined-basic"
                            label="Date"
                            variant="outlined"
                        />
                        <Typography variant="h5">Who will you remind to vote?</Typography>
                        <TextField
                            onChange={e => setReminder(e.target.value)}
                            value={reminder}
                            name="reminder"
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                        />
                    </div>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={savePlan}>
                        Save My Plan
                    </Button>
                </FormControl>
            </Box>
            <Box>
                <Typography variant="h5">
                    I will vote on {voteDate}, with an {absentee === true ? " Absentee" : " In person"} ballot, and I will remind {reminderWho} to vote as well.

                </Typography>
            </Box>
        </Container>
    );
};

export default PrefForm;
