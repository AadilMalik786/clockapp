import React, { useEffect, useRef, useState } from "react";
import music from "../audio/music.mp3";
import Header from "../component/Header";
import {RiDeleteBin6Line} from "react-icons/ri";
const Alarm = () => {
    const audioref = useRef();
    const [timehour, setTimeHour] = useState(new Date().toTimeString().split(" ")[0].split(":")[0]);
    const [timeminute, setTimeMinute] = useState(new Date().toTimeString().split(" ")[0].split(":")[1]);
    const [timesecond, setTimeSecond] = useState(new Date().toTimeString().split(" ")[0].split(":")[2]);
    const [meridiem, setMeridiem] = useState(new Date().getHours() >= 12 ? "PM" : "AM");
    const [realtime, setRealTime] = useState(new Date().toTimeString().split(" ")[0]);
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [second, setSecond] = useState("");
    const [aftermeridiem, setAfterMeridiem] = useState("");
    const [alarms, setAlarms] = useState([]);
    const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);
    const [addalarm,setAddAlarm]=useState(false);

    function audio() {
        if (audioref.current) {
            audioref.current.load();
            audioref.current.play();
            setIsAlarmPlaying(true);
        }
    }
    function stop() {
        if (audioref.current) {
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
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setRealTime(new Date().toTimeString().split(" ")[0])
        },1000)
        return () => {
            clearInterval(interval);
        };
    }, [realtime])

    const handleChangeHour = (e) => {
        setHour(e.target.value);
        // console.log(e);
    };
    const handleChangeMinute = (e) => {
        setMinute(e.target.value);
    };
    const handleChangeSecond = (e) => {
        setSecond(e.target.value);
    };
    const handleChangeMeridiem = (e) => {
        setAfterMeridiem(e.target.value);
    };
    const addAlarm = () => {
        if (hour !== "" && minute !== "" && second !== "") {
            setAddAlarm(true);
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
            <section className="bg-blue-800 h-[100vh] flex flex-col justify-evenly  items-center alarm-class overflow-hidden">
               {alarms.length > 0 && addalarm? <div className="overflow-auto w-[400px] h-[70px] text-[25px] laping-class">
                    {alarms.map((alarm, index) => (
                        <div key={index} className="flex justify-around items-center gap-[20px]">{alarm.hour}:{alarm.minute}:{alarm.second} {alarm.aftermeridiem}
                            <button onClick={() => deleteAlarm(index)}><RiDeleteBin6Line/></button></div>
                    ))}
                </div>:""}
                <div className="text-[100px] realtime-class">

                    {realtime} <span>{meridiem}</span>
                </div>
                <div>
                    <div className="flex gap-[10px] h-[80px] ampmparent-class">
                        <input type="text" value={hour} onChange={handleChangeHour} className="border w-[120px] text-center text-[55px] hover:bg-blue-400 rounded-[20px] caret-transparent allinput-class"   />
                        <input type="text" value={minute} onChange={handleChangeMinute} className="border w-[120px] text-center text-[55px] hover:bg-blue-400 rounded-[20px] caret-transparent allinput-class"  />
                        <input type="text" value={second} onChange={handleChangeSecond} className="border w-[120px] text-center text-[55px] hover:bg-blue-400 rounded-[20px] caret-transparent allinput-class" />
                        <input type="text" list="bind" value={aftermeridiem} onChange={handleChangeMeridiem} className="border w-[180px] text-center text-[55px] hover:bg-blue-400 rounded-[20px] caret-transparent allinputampm-class" />
                    </div>

                    <datalist id="bind">
                        <option value="PM" />
                        <option value="AM" />
                    </datalist>
                </div>
                <div className="mb-[60px] flex gap-[20px]">
                    <button onClick={addAlarm} className="border-[2px] border-black rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 add-class">Add Alarm</button>
                    {isAlarmPlaying ? <button onClick={stop} className="border-[2px] border-black rounded-[20px] text-[25px] h-[70px] w-[150px] hover:bg-blue-400 add-class">stop alarm</button> : ""}
                </div>
                <audio ref={audioref} >
                    <source src={music} />
                </audio>
            </section>
        </>
    )
}
export default Alarm;