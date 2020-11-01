import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';



const MyCard =({match})=>{

    const [stat,setStat]=useState()
    const [score,setScore]=useState()
    const [description,setDescription]=useState()
    
    
    useEffect(function(){

        async function newdata(){
            
            const r= await axios.get(`https://cricapi.com/api/cricketScore/?apikey=YRyLVVNdVycDrUpAo7Znd1isA6s2&unique_id=${match.unique_id}`)
        
            setStat(r.data.stat)
            setScore(r.data.score)
            
        }
        newdata();
    });


    return(
    <>
    <p>{(match.date).slice(0,10)} {match.type}</p>
    <h5 className="cartle">{match["team-1"]} Vs {match["team-2"]}</h5>
    <p className="card-text">{score}</p>
    <p className="card-text">{stat}</p>




    </>)
}



export default MyCard;



