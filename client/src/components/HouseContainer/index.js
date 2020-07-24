// importing necessary dependencies and styling
import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import OutlinedCard from "../Card";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { UserContext } from "../../context/contexts/UserContext";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    root: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    gridList: {
        width: "100%",
        height: "100%",
        justifyContent: "center"
    },
    TextField: {
        "& > *": {
            width: "35ch"
        },
        marginRight: 5
    }
});

// container for house candidates on home page; exporting component for use in other parts of application
export default function HouseContainer() {
    const classes = useStyles();
    const [house, setHouse] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const { user } = useContext(UserContext);

    const getCandidates = async () => {
        try {
            const response = await API.getDistrict(searchTerm);
            const districtId = response.data;
            const res = await API.getHouseCandidates(districtId);
            const cleanData = res.data.candidate.map(person => ({
                ...person,
                coreValues:
                    "http://votesmart.org/issue_rating_category.php?can_id=" + person.candidateId
            }));
            setHouse(cleanData);
        } catch (err) {
            console.log(err);
        }
    };

    const saveCandidate = async data => {
        try {
            await API.saveCandidate(user.token, {
                candidateName: data.ballotName,
                candidateParty: data.electionParties,
                candidateId: data.candidateId,
                coreValues: data.coreValues
            });
        } catch (err) {
            console.log(err);
        }
    };

    const handleInputChange = event => {
        const { value } = event.target;
        setSearchTerm(value);
    };

    let race = {
        hasRepublican: house.map(person =>
            person.electionStatus === "Running" &&
            person.electionParties === "Republican" &&
            person.electionParties !== "Write-In (Independent)" &&
            person.electionParties !== "Write-In"
                ? true
                : false
        ),
        hasDemocrat: house.map(person =>
            person.electionStatus === "Running" &&
            person.electionParties === "Democratic" &&
            person.electionParties !== "Write-In (Independent)" &&
            person.electionParties !== "Write-In"
                ? true
                : false
        )
    };

    return (
        <Container className={classes.root}>
            <Box
                display="flex"
                flexDirection="row"
                p={1}
                m={1}
                bgcolor="background.paper"
                className={classes.root}>
                <form className={classes.TextField} noValidate autoComplete="off">
                    <TextField
                        id="outlined-basic"
                        label="Enter zip code"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={searchTerm}
                    />
                </form>
                <Button variant="contained" color="primary" onClick={getCandidates}>
                    Search
                </Button>
            </Box>
            <Typography variant="h4">
                House Candidates for TN Primary Election on August 6th
            </Typography>

            {race.hasDemocrat[0] || race.hasDemocrat[1] ? (
                <Typography variant="h6">Democratic Primary</Typography>
            ) : (
                ""
            )}

            <GridList className={classes.gridList} cols={3}>
                {house.map(person =>
                    person.electionStatus === "Running" &&
                    person.electionParties === "Democratic" &&
                    person.electionParties !== "Write-In (Independent)" &&
                    person.electionParties !== "Write-In" ? (
                        <OutlinedCard
                            key={person.candidateId}
                            candidateId={person.candidateId}
                            candidateName={person.ballotName}
                            candidatePhoto={person.photo}
                            candidateParty={person.electionParties}
                            action={() => {
                                saveCandidate(person);
                            }}
                            btncontent="Save to My Ballot"
                            coreValues={person.coreValues}
                        />
                    ) : (
                        ""
                    )
                )}
            </GridList>
            {race.hasRepublican[0] || race.hasRepublican[1] ? (
                <Typography variant="h6">Republican Primary</Typography>
            ) : (
                ""
            )}
            <GridList className={classes.gridList} cols={3}>
                {house.map(person =>
                    person.electionStatus === "Running" &&
                    person.electionParties === "Republican" &&
                    person.electionParties !== "Write-In (Independent)" &&
                    person.electionParties !== "Write-In" ? (
                        <OutlinedCard
                            key={person.candidateId}
                            candidateId={person.candidateId}
                            candidateName={person.ballotName}
                            candidatePhoto={person.photo}
                            candidateParty={person.electionParties}
                            action={() => {
                                saveCandidate(person);
                            }}
                            btncontent="Save to My Ballot"
                            coreValues={person.coreValues}
                        />
                    ) : (
                        ""
                    )
                )}
            </GridList>
        </Container>
    );
}
