import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css'
function Navbar(){
    return(<>
    

        <ul>
        <li><NavLink exact activeClassName="active" to="/">Watch Live Matches</NavLink></li>
        <li><NavLink exact activeClassName="active" to="/upcomeing">Watch Upcomeing Matches Schedule</NavLink></li>
        <li><NavLink exact activeClassName="active" to="/todaymatch">Watch Today Matches Schedule</NavLink></li>
        <li><NavLink exact activeClassName="active" to="/recentmatch">Watch Recent Matches</NavLink></li></ul>
    </>);
}


export default Navbar;