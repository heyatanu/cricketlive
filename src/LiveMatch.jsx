import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LiveMatchCard from './LiveMatchCard';
import Navbar from './Navbar';

import './App.css';
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

function LiveMatch(){
    const [score,setScore]=useState([])
    useEffect(function(){

        async function getdata(){
          
            
            const res= await axios.get(`https://cricapi.com/api/matches/?apikey=YRyLVVNdVycDrUpAo7Znd1isA6s2`)

             
                setScore(res.data.matches)
       
        }
        getdata();
    });
    //match.type=="Twenty20" &&&& match.date.slice(0,10)=="2020-10-01"
    return(<>

        
        <Navbar/>
       
      { score.map((match) => (
          <React.Fragment>
 
            {
                 match.matchStarted==true && match.date.slice(0,10)==today?(
                     <div className="column">
                        <div className="card zoom">
                            <LiveMatchCard key={match.unique_id} match={match} /> 
                        </div>
                    </div> 
                     ):("")
                 
              }

          </React.Fragment>
            
        ))}
 
    </>);
}



export default LiveMatch;