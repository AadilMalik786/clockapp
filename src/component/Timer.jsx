import React from "react";
import { Link } from "react-router-dom";
const Timer =()=>{
    return(
        <>
        <header className="bg-slate-800 h-20 font-serif">
            <nav>
                <ul className="flex justify-evenly items-center h-20 text-4xl text-sky-700">
                <li>
                    <Link to="/">WorldClock</Link>
                    </li>
                    <li>
                    <Link to ="/Alarm">Alarm</Link>
                    </li>
                    <li>
                    <Link to ="/Timer">Timer</Link>
                    </li>
                    <li>
                    <Link to ="/Stopwatch">Stopwatch</Link>
                    </li>
                    <li>
                    <Link to ="/Clock">Clock</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <h1>Timer</h1>
        </>
    )
}
export default Timer;