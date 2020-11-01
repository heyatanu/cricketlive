
import React from 'react';
import Apifetch from './RecentGameApifetch';
import UpcomeingGame from './UpcomeingGame';
import TodayMatch from './TodayMatch';
import LiveMatch from './LiveMatch';
import {Route,Switch} from 'react-router-dom';


function App() {
  return (
    <>
     <Switch>
       <Route exact path="/" component={LiveMatch}  />
       <Route exact path="/upcomeing" component={UpcomeingGame}  />
       <Route  exact path="/todaymatch" component={TodayMatch}  />
       <Route exact path="/recentmatch" component={Apifetch}  />
       <Route component={LiveMatch} />
      
     </Switch>
    
    </>
  );
}

export default App;
