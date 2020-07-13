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

export default function HouseContainer() {
  const classes = useStyles()
  const [house, setHouse] = useState([])

  useEffect( () =>{
      API.getHouse()
      .then(res => {
          const cleanData = res.data.candidate.map((person) => ({
              ...person,
              // fullName: person.firstName + " " + person.lastName,
              photo: "https://static.votesmart.org/canphoto/" + person.candidateId + ".jpg"
            }));
          setHouse(cleanData);
      })
      .catch(err => console.log(err));
  }, [])


  return (
    <Container>
      <GridList className={classes.gridList} cols={3}>
        <h1>House Candidates</h1>
        {house.map((person) => (
          <Card
            key={person.candidateId}
            candidateId={person.candidateId}
            candidateName={person.ballotName}
            candidatePhoto={person.photo}
            candidateParty={person.electionParties}
            // action={() => {
            //   saveCandidate(person);
            // }}
            buttonContent="Save to My Ballot"
          />
        ))}
      </GridList>
    </Container>
  );
}