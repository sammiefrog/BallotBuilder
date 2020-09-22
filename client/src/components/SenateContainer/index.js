// importing necessary dependencies and styling
import React, { useEffect, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import OutlinedCard from "../Card";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { UserContext } from "../../context/contexts/UserContext";

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
    }
});

// container for senate candidates and exporting component for other parts of application
export default function SenateContainer() {
    const classes = useStyles();
    const [senate, setSenate] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        getSenate();
    }, []);

    const getSenate = async () => {
        try {
            const response = await API.getSenate();
            const cleanData = response.data.candidate.map(person => ({
                ...person,
                coreValues:
                    "http://votesmart.org/issue_rating_category.php?can_id=" + person.candidateId
            }));
            setSenate(cleanData);
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

    return (
        <Container className={classes.root}>
            <Typography variant="h4">
                TN Senate Candidates for General Election on November
            </Typography>

            <Typography variant="h6">Republican Candidate</Typography>
            <GridList className={classes.gridList} cols={3}>
                {senate.map(person =>
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
            <Typography variant="h6">Democratic Candidate</Typography>
            <GridList className={classes.gridList} cols={3}>
                {senate.map(person =>
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
        </Container>
    );
}
