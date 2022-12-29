import './App.css';
import { useState } from 'react';
import Timer from './Components/Timer'
import Buttons from './Components/Buttons'

function App() {
  const [time,setTime]=useState({ms:0,s:0,m:0,h:0})
  const [duration,setDuration]=useState()
  const [status,setStatus]=useState(0)
   // Not started = 0
  // started = 1
  // stopped = 2

   // code for start timer
  const start= () =>{ run();
    setStatus(1)
    setDuration(setInterval(run,10)) }
  // code for stop timer
    const stop= () =>{ 
      clearInterval(duration)
      setStatus(2)
    }
    // code for reset timer
    const reset= () =>{ 
      clearInterval(duration)
      setStatus(0)
      setTime({ms:0,s:0,m:0,h:0})
    }

     // code for resume timer
    const resume= () => start();
  // function for update timer counts
  var updateMs=time.ms,updateS=time.s,updateM=time.m,updateH=time.h 
  const run=()=>{
    if(updateM==60){
      updateH++;
      updateM=0;
    }
    if(updateS==60){
      updateM++;
      updateS=0;
    }
    if(updateMs==60){
      updateS++;
      updateMs=0;
    }
    updateMs++
    return setTime({ms:updateMs,s:updateS,m:updateM,h:updateH})
  }

  return (
    <div className="main-section">
    <div className="clock-holder">
    <div className="stopwatch">
        <Timer time={time} />
        <Buttons status={status} start={start} stop={stop} resume={resume} reset={reset} />
      </div>
    </div>
    </div>
  );
}

export default App;
