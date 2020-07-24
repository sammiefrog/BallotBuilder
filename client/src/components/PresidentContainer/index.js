import React, { useEffect, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import OutlinedCard from "../Card/index";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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

export default function PresidentContainer() {
    const classes = useStyles();
    const [president, setPresident] = useState([]);
    const { user } = useContext(UserContext);
    console.log(user);

    useEffect(() => {
        getPresident();
    }, []);

    const getPresident = async () => {
        try {
            const response = await API.getPresident();
            const cleanData = response.data.candidate.map(person => ({
                ...person,
                coreValues:
                    "http://votesmart.org/issue_rating_category.php?can_id=" + person.candidateId
            }));
            setPresident(cleanData);
        } catch (error) {
            console.log(error);
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
                Presidential Candidates for November 3rd General Election
            </Typography>
            <GridList className={classes.gridList} cols={3}>
                {president.map((person, i) =>
                    person.electionStatus === "Running" ||
                    (person.electionStatus === "Announced" &&
                        person.electionParties !== "Write-In (Independent)" &&
                        person.electionParties !== "Write-In") ? (
                        <OutlinedCard
                            key={i}
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
            {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Saved Candidate!
                    </Alert>
                </Snackbar> */}
        </Container>
    );
}
