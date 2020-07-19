import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import OutlinedCard from "../Card";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
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
    }
});

export default function SenateContainer() {
    const classes = useStyles();
    const [senate, setSenate] = useState([]);

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
            await API.saveCandidate({
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
            <Typography variant="h3">
                Senate Candidates for TN Primary Election on August 6th
            </Typography>

            <Typography variant="h6">Republican Primary</Typography>
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
            <Typography variant="h6">Democratic Primary</Typography>
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
