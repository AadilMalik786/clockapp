import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Header from "../component/Header";
import music from "../audio/music.mp3"
const Timer = () => {
    const myref = useRef();
    const [lapTimes, setLapTimes] = useState([])
    const hourref = useRef();
    const minref = useRef();
    const secref = useRef();
    const hora = useRef();
    const mino = useRef();
    const seco = useRef();
    const [clickLap, setClickLap] = useState(false);
    const [second, setSecond] = useState(0);
    // const [play,setPlay]=useState(false);
    let [minute, setMinute] = useState(0);
    let [hour, setHour] = useState(0);
    const [stop, setStop] = useState(false)
    const [id, setId] = useState(false);
    const [number, setNumber] = useState(null);
    //---------------------------------------------------------------------- 
    const handleClick = () => {
        const audio = myref.current;
        if (myref.current) {
            audio.play();
        }

    }

//     useEffect(() => {
//   if (hour === 0 && minute === 0 && second === 0) {
//     const audio = myref.current;
//     if (audio) {
//       audio.play();
//     }
//   }
// }, [hour, minute, second]);
    


    useEffect(() => {
        if (stop) {

            setId(setInterval(() => {

                setSecond((second) => {
                    if (hour != 0 || minute != 0 || second > 0) {
                        if (second > 0) {
                            setSecond(second - 1)
                        }
                        else {
                            setSecond(0)
                            setMinute(minute - 1)
                        }
                    } else {
                        return second = 0;
                    }
                })
            }, 1000))
            
        }

        else {
            clearInterval(id)
        }
    }, [stop])

    useEffect(() => {
        if (second == 0) {
            if (hour == 0 && minute == 0) {
                setSecond(0);
                
            }
            else {
                setSecond(59)
            }
            if (minute > 0) {
                setMinute(minute - 1)
            }
        }
    }, [second])

    useEffect(() => {
        if (minute == 0 && second == 0) {
            if (hour > 0) {
                setHour(hour - 1)
                setMinute(59)

            }
           
        }
    }, [minute, second])

    

    // setInterval(() => {
    //     if (hourref.current.textContent == minref.current.textContent  && secref.current.textContent ==minref.current.textContent ) {
    //         handleClick();
    //         stopEventHandler();
    //     }    
    // });


    //----------------------------------------------------------------------
    //events--------------------------------------------------------------
    const startEventHandler = () => {
        setStop(true);
        // console.log(myref.current.textContent);
        // handleSubmit();
        // if(){
            // handleClick();  
        // }

    }

    const stopEventHandler = () => {
        setStop(false);

    }

    const resetEventHandler = () => {
        setSecond(0);
        setMinute(0);
        setHour(0);
        setStop(false);
    }
    

    const handlesetNumber = () => {

        
        const parsedHour = parseInt(hora.current.value, 10); //parse int is used to convert string into integer the first argument is the string you want to parse and second is the number system like(10,2,16) decimal number,binary number or hexadecimal number system
        const parsedMinute = parseInt(mino.current.value, 10);
        const parsedSecond = parseInt(seco.current.value, 10);
   if(!isNaN(parsedHour) && !isNaN(parsedMinute) && !isNaN(parsedSecond)){

        setHour(parsedHour);
        setMinute(parsedMinute);
        setSecond(parsedSecond);


        hourref.current.textContent = parsedHour < 10 ? `0${parsedHour}` : parsedHour;
        minref.current.textContent = parsedMinute < 10 ? `0${parsedMinute}` : parsedMinute;
        secref.current.textContent = parsedSecond < 10 ? `0${parsedSecond}` : parsedSecond; 
        // console.log(secref.current.textContent === "00");
        // console.log(hourref.current.textContent === "11" && minref.current.textContent === "11" && secref.current.textContent === "11");
        // if (hourref.current.textContent === "11" && minref.current.textContent === "11" && secref.current.textContent === "11") {
        //    handleClick();
        //    console.log("clicked");
        //   }
        
    }
    
    }
    
    
    function stoped() {
        if (myref.current)
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
    return (
        <>
            <Header />
            <section className="bg-cyan-950 h-[150vh] flex flex-col gap-[50px]  items-center ">
                <article className="flex text-[200px] justify-center items-center timerparent-class ">

                    {hour < 10 ? <div  ref={hourref} className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] reshour-class  ">
                        {"0" + hour}
                    </div> : <div ref={hourref} className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] reshour-class">
                        {hour}
                    </div>}

                    <span>:</span>
                    {minute < 10 ? <div ref={minref}  className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] resmin-class">
                        {"0" + minute}
                    </div> :
                        <div ref={minref} className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] resmin-class">
                            {minute}
                        </div>}
                    <span className="">:</span>
                    {second < 10 ? (
                        <div ref={secref} className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] ressec-class" >
                            {"0" + second}
                        </div>
                    ) : <div ref={secref} className="bg-blue-400 h-[200px] flex justify-center items-center rounded-[20px] ressec-class" >
                        {second}
                    </div>}
                </article>
                <section className="text-[50px] w-[100%] flex justify-center gap-[50px] bg-cyan-950 timerbuttonparent-class" >
                    <button className="border-[2px] border-black rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 resstart-class" onClick={startEventHandler} >Start
                    </button>
                    <button className="border-[2px] border-black rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 resstop-class" onClick={stopEventHandler}>Stop</button>
                    <button className="border-[2px] border-black rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 resreset-class" onClick={resetEventHandler}>Reset</button>
                </section>
                <div className="flex gap-[10px]">

                    <input type="text" maxLength={2}  placeholder="HH" className=" first-class text-center  border-[2px] border-black text-[red] bg-cyan-950   h-[40px] hover:bg-blue-400 w-[50px] rounded-[10px]" name="adil" ref={hora} />
                    <input type="text" maxLength={2} placeholder="MM" className="border-[2px] border-black text-center bg-cyan-950 text-[red]  h-[40px] hover:bg-blue-400 w-[50px] rounded-[10px]" name="wasim" ref={mino} />
                    <input type="text" maxLength={2} placeholder="SS" className="border-[2px] border-black text-center bg-cyan-950 text-[red] h-[40px] hover:bg-blue-400 w-[50px] rounded-[10px]" name="malik" ref={seco} />
                    <button className="border-[2px] border-black rounded-[10px] hover:bg-blue-400 " onClick={handlesetNumber}>settimer</button>
                    {/* <button className="border-[2px] border-black rounded-[10px] hover:bg-blue-400" onClick={stoped}>Stop Alarm</button> */}
                </div>
                <audio ref={myref}>
                    <source src={music} />
                </audio>
                {/* <button onClick={handleClick} >play</button> */}
                <button className="border-[2px] border-black rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 reslap-class" onClick={recordLapTime}>
                    Lap
                </button>
                <section className="text-[50px] w-[100%] flex justify-center gap-[50px] bg-cyan-950 superlaptimeparent-class ">
                    {/* ... (existing buttons) */}
                    {clickLap ? <div className="w-[200px] h-[100px]  overflow-auto text-[20px] ">
                        {lapTimes.map((lapTime, index) => (
                            <div key={index} >
                                Lap {index + 1}: {lapTime.hour}:{lapTime.minute}:{lapTime.second}
                            </div>
                        ))}
                    </div> : ""}
                </section>
                {clickLap ? <div className=" z-10">
                    <button className="border-[2px] border-black bg-[] rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 resclear-class" onClick={clearLapTimes}>
                        Clear
                    </button>
                </div> : ""}
            </section>
        </>
    )
}
export default Timer;