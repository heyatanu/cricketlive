
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
       <Route exact path="cricketlive/" component={LiveMatch}  />
       <Route exact path="cricketlive/upcomeing" component={UpcomeingGame}  />
       <Route  exact path="cricketlive/todaymatch" component={TodayMatch}  />
       <Route exact path="cricketlive/recentmatch" component={Apifetch}  />
       <Route component={Er} />
      
     </Switch>
    
    </>
  );
}

export default App;
