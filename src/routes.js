import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Sleep from './Page/Sleep'
import Nap from './Page/Nap'
import Plan from './Page/Plan'
import Report from './Page/Report'
import SleepStart from './Page/SleepStart'

export default function Routes() {
  return (
    <Switch>
      <Route path="/sleep" component={Sleep} />
      <Route path="/start" component={SleepStart} />
      <Route path="/report" component={Report} />
      <Route path="/nap" component={Nap} />
      <Route path="/plan" component={Plan} />
      <Route path="/" exact component={Sleep} />
    </Switch>
  );
}