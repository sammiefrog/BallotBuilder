import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import Card from '../Card'
import API from '../../utils/API';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gridList: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    }
});

export default function PresidentContainer() {
    const classes = useStyles()
    const [president, setPresident] = useState([])

    useEffect(() => {
        getPresident();
    }, [])

    const getPresident = () => {
        API.getPresident()
        .then((res) => {
            const cleanData = res.data.candidate.map((person) => ({
             ...person,
            //  fullName: person.firstName + " " + person.lastName,
             photo:
             "https://static.votesmart.org/canphoto/" + person.candidateId + ".jpg",
        }));
        setPresident(cleanData);
        })
        .catch((err) => console.log(err));
    }

    const saveCandidate = (data) => {
        console.log(data)
        API.saveCandidate({
            candidateName: data.ballotName,
            candidateParty: data.electionParties,
            candidateId: data.candidateId,
            candidatePhoto: data.photo
                ? data.photo
                : 'https://via.placeholder.com/150.png?text=No+Image+Found',
        }).then(res => console.log(res))
            .catch(err => console.log(err));
    }

return (
    <Container>
        <GridList className={classes.gridList} cols={3}>
            <h1>Presidential Candidates</h1>
            {president.map(person => (
                person.electionStatus === "Announced" && person.electionParties !== "Write-In (Independent)" && person.electionParties !== "Write-In" ?
                <Card
                    key={person.candidateId}
                    candidateId={person.candidateId}
                    candidateName={person.ballotName}
                    candidatePhoto={person.photo}
                    candidateParty={person.electionParties}
                    action={() => { saveCandidate(person) }}
                    buttonContent="Save to My Ballot"
                />
            :""))}
        </GridList>
    </Container>
);
}