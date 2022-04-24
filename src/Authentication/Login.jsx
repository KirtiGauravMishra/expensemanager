import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SignupPage from './SingupPage';




const Login = () => {


    return(

        <Typography align='right' >
        <Button variant="contained" align ="right" color="primary"
         onClick={SignupPage}> Signup</Button>
        </Typography>
          

    );

};
export default Login;