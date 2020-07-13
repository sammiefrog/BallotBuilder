import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  header: {
    padding: '25px',
    margin: '20px',
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'center'
  },
});

const Ballot = () => {
  const classes = useStyles();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    loadCandidates();
  }, []);

  const loadCandidates = () => {
    
  }
  
  
    return (
      <div>
        <Box border={2} borderColor='secondary.main' className={classes.header}>
          <Typography variant='h1'>My Ballot</Typography>
        </Box>
      </div>
    );
}
 
export default Ballot;