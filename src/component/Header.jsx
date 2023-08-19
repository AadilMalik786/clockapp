import React from "react";
import { Link,NavLink } from "react-router-dom";
const Header=()=>{
    return(
        <>
         <header className="bg-slate-800 font-serif">
        <nav>
          <ul className="flex justify-evenly items-center  h-20 text-4xl    text-sky-700 resnavi-class">
            <li > 
              <NavLink  to="/" exactactiveClassName="active" className="hover:text-sky-300 transition duration-700 ease-in" >WorldClock</NavLink>
            </li>
            <li>
              <NavLink to="/Alarm" exactactiveClassName="active" className="hover:text-sky-300 transition duration-700 ease-in ">Alarm</NavLink>
            </li>
            <li>
              <NavLink to="/Timer" exactactiveClassName="active" className="hover:text-sky-300 transition duration-700 ease-in ">Timer</NavLink>
            </li>
            <li>
              <NavLink to="/Stopwatch" exactactiveClassName="active" className="hover:text-sky-300 transition duration-700 ease-in ">Stopwatch</NavLink>
            </li>
            <li>
              <NavLink to="/Clock" exactactiveClassName="active" className="hover:text-sky-300 transition duration-700 ease-in ">Clock</NavLink>
            </li>
          </ul>
        </nav>
      </header>
        </>
    )
}
export default Header;