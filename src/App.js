import React from 'react';
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Details/Main/Main';
import { PushToTalkButton, PushToTalkButtonContainer,ErrorPanel } from '@speechly/react-ui';

import usestyles from './style';


const App = () => {
const classes = usestyles();

  return (

    
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
  );
};

export default App;