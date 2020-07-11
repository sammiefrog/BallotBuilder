import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import LoginForm from '../components/LoginForm';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    typography: {
        marginTop: '20px',
  }
}));

const Login = () => {
    const classes = useStyles();

    return (
      <div>
        <Box className={classes.typography}>
          <Typography align="center" variant="h3" color="secondary">
            Login to create or view your ballot!
          </Typography>
        </Box>
        {/* <LoginForm /> */}
        <Box>
          <Typography>
            If you arent a registered user click here to register!
          </Typography>
          <Button color='secondary' href='/register'>Register Now</Button>
        </Box>
      </div>
    );
}
 
export default Login;