import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyCard from './RecentMatchcard';
import './App.css';
import Navbar from './Navbar';
const c=1;

function Apifetch(){
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
                 match.matchStarted==true ?(
                     <div className="column">
                        <div className="card zoom">
                            <MyCard key={match.unique_id} match={match} /> 
                        </div>
                    </div> 
                     ):("")
                 
              }

          </React.Fragment>
            
        ))}
 
    </>);
}



export default Apifetch;