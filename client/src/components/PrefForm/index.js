import React, { useState, useEffect } from 'react';
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


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin: "10px",
  },
  textfields: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
      margin: '10px',
      display: 'flex',
    justifyContent: "center",
      alignItems: "center",
    textAlign: 'center',
  },
  radio: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

const PrefForm = () => {
    const classes = useStyles();
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState("");


    const savePlan = async (plan) => {
        console.log(date)
        console.log(reminder)
      try {
          await API.savePlan({
              when: plan.date,
              absentee: plan.absentee,
              reminderWho: plan.reminder
        });
      } catch (err) {
        console.log(err);
      }
    };

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setDate([ name: value ] );
    //     setReminder({ name: value });
    // };

    return (
      <Box border={2} borderColor="secondary.main" className={classes.root}>
        <Typography variant="h3">
          {/* Select and Save Your Voting Preferences */}
        </Typography>
        <br />
        <FormControl component="fieldset">
          <Typography variant="h5">How are you voting?</Typography>
          <RadioGroup
            row
            className={classes.radio}
            aria-label="position"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value="true"
              name="absentee"
              control={<Radio color="primary" />}
              label="Absentee"
              labelPlacement="start"
            />
            <FormControlLabel
              value="false"
              name="absentee"
              control={<Radio color="primary" />}
              label="In Person"
              labelPlacement="start"
            />
          </RadioGroup>
          <form className={classes.textfields} noValidate autoComplete="off">
            <Typography variant="h5">When will you vote?</Typography>
            <TextField
              onChange={(e) => setDate(e.target.value)}
            //   value={date}
              name="date"
              id="outlined-basic"
              label="Date"
              variant="outlined"
            />
            <Typography variant="h5">Who will you remind to vote?</Typography>
            <TextField
              onChange={(e) => setReminder(e.target.value)}
            //   value={reminder}
              name="reminder"
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </form>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={savePlan}
          >
            Save My Plan
          </Button>
        </FormControl>
      </Box>
    );
}
 
export default PrefForm;