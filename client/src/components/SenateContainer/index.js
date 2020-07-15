import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import Card from '../Card'
import API from '../../utils/API';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  gridList: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});

export default function SenateContainer() {
    const classes = useStyles()
    const [senate, setSenate] = useState([])

    useEffect( () =>{
       getSenate()
    }, [])
  
  const getSenate = async () => {
    try{
     const response = await API.getSenate()
      const cleanData = response.data.candidate.map((person) => ({
           ...person,
           photo:
             "https://static.votesmart.org/canphoto/" +
             person.candidateId +
             ".jpg",
         }));
      setSenate(cleanData);
    }catch(err){console.log(err);};
  }

  const saveCandidate = async (data) => {
    try {
      await API.saveCandidate({
        candidateName: data.ballotName,
        candidateParty: data.electionParties,
        candidateId: data.candidateId,
        candidatePhoto: data.photo
          ? data.photo
          : "https://via.placeholder.com/150.png?text=No+Image+Found",
      });
    } catch (err) {
      console.log(err);
    }
  };


    return (
      <Container className={classes.root}>
        <Typography variant="h3">Senate Candidates</Typography>

        <GridList className={classes.gridList} cols={3}>
          {senate.map((person) => 
          person.electionStatus === "Running" &&
          person.electionParties !== "Write-In (Independent)" &&
          person.electionParties !== "Write-In" ? (
            <Card
              key={person.candidateId}
              candidateId={person.candidateId}
              candidateName={person.ballotName}
              candidatePhoto={person.photo}
              candidateParty={person.electionParties}
              action={() => {
                saveCandidate(person);
              }}
              btncontent="Save to My Ballot"
            />
            ) : (
              ""
          ))}
        </GridList>
      </Container>
    );
}