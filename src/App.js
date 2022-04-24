import React from 'react';
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Details/Main/Main';
import { PushToTalkButton, PushToTalkButtonContainer,ErrorPanel } from '@speechly/react-ui';

import usestyles from './style';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Login from './Authentication/Login';
import Menu from './Authentication/SingupPage';
import SignupPage from './Authentication/SingupPage';
import { Link } from 'react-router-dom';




const App = () => {
const classes = usestyles();


  return ( 
          
<div>
    <nav>  
      <Login  / >
    </nav>

    <div>

   



  <Grid className={classes.grid}  container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
  
  <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>

        <Grid  item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>

        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>

        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>



      <PushToTalkButtonContainer>
          <PushToTalkButton />
          <ErrorPanel/>
        </PushToTalkButtonContainer>
        </Grid>
    </div>
    </div>
  );
};

export default App;