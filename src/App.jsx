import React from "react";
import WorldClock from "./component/WorldClock";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alarm from "./component/Alarm";
import Timer from "./component/Timer";
import Stopwatch from "./component/Stopwatch";
import Clock from "./component/Clock";

const App =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<WorldClock/>}/>
            <Route path="alarm" element={<Alarm/>}/>
            <Route path="timer" element={<Timer/>}/>
            <Route path="stopwatch" element={<Stopwatch/>}/>
            <Route path="clock" element={<Clock/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App;