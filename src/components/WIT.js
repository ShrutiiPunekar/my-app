import React from 'react';
import { NavLink } from 'react-router-dom';

export default function WIT() {
  return (
    <div>
        <div className="container">
            <NavLink to="/"><button className="">1st Floor</button><br/><br/></NavLink>
            <NavLink to="/"><button className="">2nd Floor</button><br/><br/></NavLink>
            <NavLink to="/WIT3"><button className="" >3rd Floor</button><br/><br/></NavLink>
            <NavLink to="/"><button className="">4th Floor</button><br/><br/></NavLink>
        </div>
    </div>
  );
}


