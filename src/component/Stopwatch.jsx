import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
const Stopwatch =()=>{
    const myref =useRef();
    const [second, setSecond] = useState(0);
    let [minute, setMinute] = useState(0);
        let [hour, setHour] = useState(0);
        const [stop, setStop] = useState(false)
        const [id, setId] = useState(false);
        //---------------------------------------------------------------------- 
        useEffect(() => {
            if (stop) {
                setId(setInterval(() => {
                    setSecond((second)=>second+1)
                }, 1000))   
            }
            else{
                clearInterval(id)
            }
        },[stop]);
        //--------------------------------------------------------------------

        useEffect(() => {
            if (second >= 60) {
                setMinute(minute + 1);
                setSecond(0);
            }
        }, [second]);

        //---------------------------------------------------------------------------

        useEffect(() => {
            if (minute == 59 && second==60) {

                setSecond(0);
                setMinute(0);
                setHour(hour + 1);
            }
        }, [minute,second]);

        //----------------------------------------------------------------------
        //events--------------------------------------------------------------
        const startEventHandler = () => {
        setStop(true);
        // console.log(myref.current.textContent);
        }
        const stopEventHandler=()=>{
            setStop(false);
        }

        const resetEventHandler=()=>{
            setSecond(0);
            setMinute(0);
            setHour(0);
            setStop(false);
        }
    return(
        <>
        <header className="bg-slate-800 font-serif">
            <nav>
                <ul className="flex justify-evenly items-center h-20 text-4xl text-sky-700 resnavi-class">
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
        <section className="bg-blue-500 h-[100vh] flex flex-col gap-[50px] justify-center items-center ">
                        <article className="flex text-[200px] justify-center items-center parent-class ">
                            
                            {hour<10?<div className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] reshour-class  ">
                                {"0"+hour}
                            </div>:<div className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] reshour-class">
                                {hour}
                            </div>}
                            
                            <span>:</span>
                            {minute<10?<div className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] resmin-class">
                                {"0"+minute}
                            </div>:
                            <div className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] resmin-class">
                                {minute}
                            </div>}
                                <span className="">:</span>
                        {second<10?(
                            <div ref={myref} className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] ressec-class" >
                                {"0"+second}
                            </div>
                            ):<div ref={myref} className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] ressec-class" >
                            {second}
                        </div>}
                        </article>
                <section className="text-[50px] w-[100%] flex justify-center gap-[50px] bg-blue-500 superparent-class" >
                    <button className="border-[2px] border-black rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 resstart-class" onClick={startEventHandler} >Start
                    </button>
                    <button className="border-[2px] border-black rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 resstop-class" onClick={stopEventHandler}>Stop</button>
                    <button className="border-[2px] border-black rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 resreset-class" onClick={resetEventHandler}>Reset</button>
                </section>
                </section>
        
        </>
    )
}
export default Stopwatch;