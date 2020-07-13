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

export default function SenateContainer() {
    const classes = useStyles()
    const [senate, setSenate] = useState([])

    useEffect( () =>{
        API.getSenate()
        .then(res => {
            const cleanData = res.data.candidate.map((person) => ({
                ...person,
                // fullName: person.firstName + " " + person.lastName,
                photo: "https://static.votesmart.org/canphoto/" + person.candidateId + ".jpg"
              }));
            setSenate(cleanData);
        })
        .catch(err => console.log(err));
    }, [])

    return (
      <Container>
        <GridList className={classes.gridList} cols={3}>
          <h1>Senate Candidates</h1>
          {senate.map((person) => (
            <Card
              key={person.candidateId}
              candidateId={person.candidateId}
              candidateName={person.ballotName}
              candidatePhoto={person.photo}
              candidateParty={person.electionParties}
            //   action={() => {
            //     saveCandidate(person);
            //   }}
              btncontent="Save to My Ballot"
            />
          ))}
        </GridList>
      </Container>
    );
}