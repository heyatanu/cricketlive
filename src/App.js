
import React from 'react';
import Apifetch from './RecentGameApifetch';
import UpcomeingGame from './UpcomeingGame';
import TodayMatch from './TodayMatch';
import LiveMatch from './LiveMatch';
import {Route,Switch} from 'react-router-dom';
function Er(){
  return(<h1>EEERRROOOORRRR</h1>)
}

function App() {
  return (
    <>
     <Switch>
       <Route exact path="/" component={LiveMatch}  />
       <Route exact path="/upcomeing" component={UpcomeingGame}  />
       <Route  exact path="/todaymatch" component={TodayMatch}  />
       <Route exact path="/recentmatch" component={Apifetch}  />
       <Route component={Er} />
      
     </Switch>
    
    </>
  );
}

export default App;
