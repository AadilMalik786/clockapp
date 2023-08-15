import React, { useRef,useState,useEffect } from "react";
import { Link } from "react-router-dom";
import music from "../audio/music.mp3"
const Timer =()=>{
    const myref =useRef();
    const [lapTimes, setLapTimes] = useState([])
    const hourref=useRef();
    const minref=useRef();
    const secref=useRef();
    const hora=useRef();
    const mino=useRef();
    const seco=useRef();    
    const [clickLap,setClickLap]=useState(false);
    const [second, setSecond] = useState(0);
    // const [play,setPlay]=useState(false);
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
                setInterval(()=>{
                if(hora.current.value == hourref.current.textContent && mino.current.value== minref.current.textContent && seco.current.value==secref.current.textContent)
                {
                        handleClick();
                    }

                })
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
        // handleSubmit();
        // if(hora.current.value == hourref.current.textContent && mino.current.value== minref.current.textContent && seco.current.value==secref.current.textContent){
        //     handleClick();  
        // }
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
    const handleClick=()=>{
        const audio = myref.current;
        if(myref.current){
            audio.play();
            console.log(audio.play());
        }
        
    }
    function stoped(){
        if(myref.current)
        myref.current.pause();
}
// const handleSubmit=()=>{
//     if(hora.current.value == hourref.current.textContent && mino.current.value== minref.current.textContent && seco.current.value==secref.current.textContent){
//             handleClick();  
//         }
        // console.log(hora.current.value==hourref.current.textContent);
       
    // }
    const recordLapTime = () => {
        const lapTime = {
          hour: hour,
          minute: minute,
          second: second
        };
        setLapTimes([...lapTimes, lapTime]);
        setClickLap(true);
        
      };
      const clearLapTimes = () => {
        setLapTimes([]);
        setClickLap(false);
      };
    return(
        <>
        <header className="bg-slate-800 h-20 font-serif">
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
        <section className="bg-cyan-950 h-[150vh] flex flex-col gap-[50px]  items-center ">
                        <article className="flex text-[200px] justify-center items-center parent-class ">
                            
                            {hour<10?<div ref={hourref} className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] reshour-class  ">
                                {"0"+hour}
                            </div>:<div ref={hourref} className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] reshour-class">
                                {hour}
                            </div>}
                            
                            <span>:</span>
                            {minute<10?<div ref={minref} className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] resmin-class">
                                {"0"+minute}
                            </div>:
                            <div ref={minref} className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] resmin-class">
                                {minute}
                            </div>}
                                <span className="">:</span>
                        {second<10?(
                            <div ref={secref} className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] ressec-class" >
                                {"0"+second}
                            </div>
                            ):<div ref={secref} className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] ressec-class" >
                            {second}
                        </div>}
                        </article>
                <section className="text-[50px] w-[100%] flex justify-center gap-[50px] bg-cyan-950 superparent-class" >
                    <button className="border-[2px] border-black rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 resstart-class" onClick={startEventHandler} >Start
                    </button>
                    <button className="border-[2px] border-black rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 resstop-class" onClick={stopEventHandler}>Stop</button>
                    <button className="border-[2px] border-black rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 resreset-class" onClick={resetEventHandler}>Reset</button>
                </section>
        <div className="flex gap-[10px]">
            
            <input type="text" maxLength={2} placeholder="HH"  className="border h-[40px] w-[50px] rounded-[10px]" name="adil" ref={hora}  />
            <input type="text" maxLength={2} placeholder="MM" className="border h-[40px] w-[50px] rounded-[10px]" name="wasim" ref={mino} />
            <input type="text" maxLength={2} placeholder="SS"  className="border h-[40px] w-[50px] rounded-[10px]" name="malik" ref={seco}/>
            <button className="border-[2px] border-black rounded-[10px] hover:bg-blue-400" onClick={stoped}>Stop Alarm</button>
        </div>
        <audio ref={myref}>
            <source src={music} />
        </audio>
        {/* <button onClick={handleClick} >play</button> */}
    <button className="border-[2px] border-black rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 reslap-class" onClick={recordLapTime}>
        Lap
      </button>
        <section className="text-[50px] w-[100%] flex justify-center gap-[50px] bg-cyan-950 superparent-class ">
      {/* ... (existing buttons) */}
      {clickLap?<div className="w-[200px] h-[100px]  overflow-auto text-[20px] ">
      {lapTimes.map((lapTime, index) => (
        <div key={index} >
          Lap {index + 1}: {lapTime.hour}:{lapTime.minute}:{lapTime.second}
        </div>
      ))}
    </div>:""}
    </section>
    
    {clickLap?<div className=" z-10">
    <button className="border-[2px] border-black bg-[] rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 resclear-class" onClick={clearLapTimes}>
  Clear
</button>
</div>:""}
                </section>
        </>
    )
}
export default Timer;