import React from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <>
         <header className="bg-slate-800 font-serif">
        <nav>
          <ul className="flex justify-evenly items-center  h-20 text-4xl    text-sky-700 resnavi-class">
            <li >
              <Link  to="/" className="hover:text-sky-300 transition duration-700 ease-in " >WorldClock</Link>
            </li>
            <li>
              <Link to="/Alarm" className="hover:text-sky-300 transition duration-700 ease-in ">Alarm</Link>
            </li>
            <li>
              <Link to="/Timer" className="hover:text-sky-300 transition duration-700 ease-in ">Timer</Link>
            </li>
            <li>
              <Link to="/Stopwatch" className="hover:text-sky-300 transition duration-700 ease-in ">Stopwatch</Link>
            </li>
            <li>
              <Link to="/Clock" className="hover:text-sky-300 transition duration-700 ease-in ">Clock</Link>
            </li>
          </ul>
        </nav>
      </header>
        </>
    )
}
export default Header;