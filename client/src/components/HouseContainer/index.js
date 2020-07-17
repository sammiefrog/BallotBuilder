import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import Card from '../Card'
import API from '../../utils/API';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
  TextField: {
    '& > *': {
      // margin: theme.spacing(1),
      width: '35ch',
    },
  }
});

export default function HouseContainer() {
  const classes = useStyles()
  const [house, setHouse] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  // useEffect(() => {
  //   getHouse()
  // }, [])

  // const getHouse = async () => {
  //   try {
  //     const response = await API.getHouse()
  //   const cleanData = response.data.candidate.map((person) => ({
  //     ...person,
  //     photo:
  //       "https://static.votesmart.org/canphoto/" +
  //       person.candidateId +
  //       ".jpg",
  //   }));
  //   setHouse(cleanData);
  // }
  //   catch (err) { console.log(err) };
  // }

  const getCandidates = async () => {
    try {
      const response = await API.getDistrict(searchTerm)
      const districtId = response.data
      const res = await API.getHouseCandidates(districtId)
      console.log(res)
      const cleanData = res.data.candidate.map((person) => ({
        ...person,
        coreValues:
          "http://votesmart.org/issue_rating_category.php?can_id=" + person.candidateId,
      }));
      setHouse(cleanData);
    }
    catch (err) { console.log(err) }
  }

  const saveCandidate = async (data) => {
    try {
      await API.saveCandidate({
        candidateName: data.ballotName,
        candidateParty: data.electionParties,
        candidateId: data.candidateId,
        coreValues:
          data.coreValues,
      })
    }
    catch (err) { console.log(err) };
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  }

  return (
    <Container className={classes.root}>
      <form className={classes.TextField} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleInputChange} value={searchTerm} />
      </form>
      <Button variant="contained" color="secondary" onClick={getCandidates}>
        Search
 </Button>
      <Typography variant="h3">House Candidates</Typography>
      <GridList className={classes.gridList} cols={3}>
        {house.map((person) =>
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
                coreValues ={person.coreValues}
              />
            ) : (
              ""
            ))}
      </GridList>
    </Container>
  );
}