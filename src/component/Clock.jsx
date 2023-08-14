import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
const Clock =()=>{
    const [rotation, setRotation] = useState({ hour: 0, minute: 0, second: 0 });
    // console.log(new Date());
    useEffect(()=>{
         setInterval(()=>{
        const date = new Date();
        let htime=date.getHours();
        let mtime=date.getMinutes();
        let stime=date.getSeconds();
        let hrotation=30*htime +mtime/2;
        let mrotation= 6*mtime;
        let srotation=6*stime;
        setRotation({ hour: hrotation, minute: mrotation, second: srotation });
        },1000)
    });
    return(
        <>
        <header className="bg-slate-800 font-serif">
            <nav>
                <ul className="flex justify-evenly items-center h-20 text-4xl text-sky-700 resnavi-class ">
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
        <div className="flex justify-center items-center h-[100vh] bg-blue-950 " >
            <div className="h-[30rem] w-[30rem] relative image-class clock-class">
            <div className="h-[17%] w-[0.5%] left-[49.9%] top-[33%] absolute " id="hour" style={{ transform: `rotate(${rotation.hour}deg)` }}></div>
            <div className="h-[25%] w-[0.5%] left-[49.9%] top-[25%] absolute " id="minute"style={{ transform: `rotate(${rotation.minute}deg)` }}></div>
            <div className="h-[30%] w-[0.5%] left-[49.9%] top-[20%] absolute "  id="second"style={{ transform: `rotate(${rotation.second}deg)` }}></div>
            </div>
        </div>
        </>
    )
}
export default Clock;