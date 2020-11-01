import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

function TodayMatch(){
    const [score,setScore]=useState([])
    
    useEffect(function(){

        async function getdata(){
          
            
            const res= await axios.get(`https://cricapi.com/api/matches/?apikey=YRyLVVNdVycDrUpAo7Znd1isA6s2`)

             
                setScore(res.data.matches)
                
       
        }
        getdata();
    });
    //match.type=="Twenty20" &&
    return(<>

       
        <Navbar/>
    
      { score.map((match) => (
          <React.Fragment>
 

              {
                match.date.slice(0,10)==today?(
                     <div className="column">
                        <div className="card zoom">
                            <p>{match.date.slice(0,10)}</p>
                            <h5>{match["team-1"]} Vs {match["team-2"]}</h5>
                            {match.matchStarted==true?(<p>Match Is Live <NavLink exact activeClassName="active" to="/">Watch live Here</NavLink></p>):("")}
                        </div>
                    </div> 
                     ):("")
              }


          </React.Fragment>
            
        ))}
 
    </>);
}



export default TodayMatch;