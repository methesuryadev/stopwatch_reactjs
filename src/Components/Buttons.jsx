import React from 'react'

export default function Buttons(props) {
  return (
    <div>
        {props.status==0?
        <button className='stopwatch-btn stopwatch-btn-gre' onClick={props.start}>Start</button>
        : props.status==1? <div> <button className='stopwatch-btn stopwatch-btn-gre' onClick={props.stop}>Stop</button> <button className='stopwatch-btn stopwatch-btn-gre' onClick={props.reset}>Reset</button></div>:props.status==2? <div><button className='stopwatch-btn stopwatch-btn-gre' onClick={props.resume}>Resume</button> <button className='stopwatch-btn stopwatch-btn-gre' onClick={props.reset}>Reset</button></div>:""
        }
      
    </div>
  )
}
