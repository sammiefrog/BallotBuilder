import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import API from "../utils/API";
import OutlinedCard from "../components/Card";
import GridList from "@material-ui/core/GridList";
import Container from "@material-ui/core/Container";
import PrefForm from "../components/PrefForm";
import { UserContext } from '../context/contexts/UserContext';

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "20px"
    },
    header: {
        maxWidth: "100%",
        padding: "25px",
        margin: "20px",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    gridList: {
        width: "100%",
        height: "100%",
        justifyContent: "center"
    }
});

const Ballot = () => {
    const classes = useStyles();
    const [candidates, setCandidates] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        loadCandidates();
    }, []);

    const loadCandidates = async () => {
        try {
            const response = await API.getSaved(user.token);
            setCandidates(response.data.candidates);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteCandidate = async id => {
        try {
            const res = await API.deleteCandidate(user.token, id);
            loadCandidates();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container className={classes.root}>
            <PrefForm />
            <Box border={2} borderColor="secondary.main" className={classes.header}>
                <Typography variant="h3">My Candidates</Typography>
            </Box>

            <GridList className={classes.gridList} cols={3}>
                {candidates.map((candidate, i) => (
                    <OutlinedCard
                        key={i}
                        id={candidate._id}
                        candidateId={candidate.candidateId}
                        candidateName={candidate.candidateName}
                        candidatePhoto={candidate.candidatePhoto}
                        candidateParty={candidate.candidateParty}
                        coreValues={candidate.coreValues}
                        action={() => {
                            deleteCandidate(candidate._id);
                        }}
                        btncontent="Remove from My Ballot"
                    />
                ))}
            </GridList>
        </Container>
    );
};

export default Ballot;
