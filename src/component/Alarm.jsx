import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import music from "../audio/music.mp3"
import Header from "../component/Header";
const Alarm = () => {
    const audioref=useRef();
    const [timehour, setTimeHour] = useState(new Date().toTimeString().split(" ")[0].split(":")[0]);
    const [timeminute, setTimeMinute] = useState(new Date().toTimeString().split(" ")[0].split(":")[1]);
    const [timesecond, setTimeSecond] = useState(new Date().toTimeString().split(" ")[0].split(":")[2]);
    const [meridiem, setMeridiem] = useState(new Date().toLocaleTimeString().split(" ")[1]);
    const [realtime, setRealTime] = useState();
    // console.log(new Date().toTimeString().split(" ")[0].split(":")[0]);
    // console.log(new Date().toLocaleTimeString().split(" ")[1]);
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [second, setSecond] = useState("");
    const [aftermeridiem, setAfterMeridiem] = useState("");
    const [alarms,setAlarms]=useState([]);
    const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);

    function audio(){
        
        if(audioref.current){
            audioref.current.load();
            audioref.current.play();
            setIsAlarmPlaying(true);
        }
    }
    function stop(){
        if(audioref.current){
        audioref.current.pause();
        setIsAlarmPlaying(false);
    }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log("Checking alarm conditions...");
            setTimeHour(new Date().toTimeString().split(" ")[0].split(":")[0]);
            setTimeMinute(new Date().toTimeString().split(" ")[0].split(":")[1]);
            setTimeSecond(new Date().toTimeString().split(" ")[0].split(":")[2]);
            // setMeridiem(new Date().toLocaleTimeString().split(" ")[1]);
            // console.log(new Date().toTimeString().split(" ")[0].split(":")[2]);
            alarms.forEach(element => {
                
                if (timehour === element.hour && timeminute === element.minute && timesecond === element.second && meridiem === element.aftermeridiem) {
                    audio();
                }
            });
        },1000);
        return () => {
            clearInterval(interval);
        };
    }); // Include both time and alarm in the dependency array.

    useEffect(() => {
        const interval = setInterval(() => {
            setRealTime(new Date().toTimeString().split(" ")[0])
        }, 1000)
        return () => {
            clearInterval(interval);
        };
    },[realtime])

    const handleChangeHour = (e) => {
        setHour(e.target.value);
        // console.log(e);
    };
    const handleChangeMinute = (e) => {
        setMinute(e.target.value);
        // console.log(e);
    };
    const handleChangeSecond = (e) => {
        setSecond(e.target.value);
        // console.log(e);
    };
    const handleChangeMeridiem = (e) => {
        setAfterMeridiem(e.target.value);
        // console.log(e);
    };
    const addAlarm = () => {
        if (hour !== "" && minute !== "" && second !== ""){
        const newAlarm = {
            hour: hour,
            minute: minute,
            second: second,
            aftermeridiem: aftermeridiem
        };

        setAlarms(prevAlarms => [...prevAlarms, newAlarm]);
        setHour("");
        setMinute("");
        setSecond("");
        setAfterMeridiem("PM");
        }
    };
    const deleteAlarm = (index) => {
        stop();
        setAlarms(prevAlarms => {
            const newAlarms = [...prevAlarms];
        newAlarms.splice(index, 1);
        return newAlarms;
    });
    };

    return (
        <>
            <Header />
            <div>
            {alarms.map((alarm, index) => (
                    <div key={index}>{alarm.hour}:{alarm.minute}:{alarm.second} {alarm.aftermeridiem}
                     <button onClick={() => deleteAlarm(index)}>Delete</button></div>
                    
                ))}
            </div>
            <div>

                {realtime} <span>{meridiem}</span>
            </div>
            <input type="text" value={hour} onChange={handleChangeHour} className="border" />
            <input type="text" value={minute} onChange={handleChangeMinute} className="border" />
            <input type="text" value={second} onChange={handleChangeSecond} className="border" />
            <input type="text" list="bind" value={aftermeridiem} onChange={handleChangeMeridiem} className="border" />
           
            <datalist id="bind">
                <option value="PM" />
                <option value="AM" />
            </datalist>
            {isAlarmPlaying?<button onClick={stop}>stop alarm</button>:""}
            
            <button onClick={addAlarm}>Add Alarm</button>
            <audio ref={audioref} >
                <source src={music} />
            </audio>
        </>
    )
}
export default Alarm;