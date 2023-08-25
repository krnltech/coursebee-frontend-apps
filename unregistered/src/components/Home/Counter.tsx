import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

interface CounterPropsType {
  end:number;
  duration?:number;
  once?:boolean;
}

function Counter({end, duration, once}:CounterPropsType) {
  const [activeSensor, setActiveSensor] = useState(true);
  
  function onEnd () {
    if(once) return;
    setActiveSensor(false);
  }
  return (
    <>
        <VisibilitySensor partialVisibility offset={{ top: 10 }} active={activeSensor}>
        {({ isVisible }:any) => (
            <span>
                {isVisible ? <CountUp onEnd={onEnd} end={end} duration={duration || 1.5}/> : 0}
            </span>
        )}
        </VisibilitySensor>
    </>
  )
}

export default Counter