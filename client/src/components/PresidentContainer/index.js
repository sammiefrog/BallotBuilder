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
    
    // if (person.electionStatus === "Announced" && person.electionParties !== "Write-In (Independent)" && person.electionParties !== "Write-In") 

    useEffect(() => {
        API.getPresident()
            .then(res => {
                console.log(res.data)
                const cleanData = res.data.candidate.map((person) => ({
                ...person,
                fullName: person.firstName + " " + person.lastName
            }));
    setPresident(cleanData);
})
        .catch (err => console.log(err));
    }, [])

return (
    <Container>
        <GridList className={classes.gridList} cols={3}>
            <h1>Presidential Candidates</h1>
            {president.map(person => (
                person.electionStatus === "Announced" && person.electionParties !== "Write-In (Independent)" && person.electionParties !== "Write-In" ?
                <Card
                    key={person.candidateId}
                    candidateId={person.candidateId}
                    candidateName={person.fullName}
                    candidateParty={person.electionParties}
                />
            :""))}
        </GridList>
    </Container>
);
}