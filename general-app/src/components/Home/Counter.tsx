import { useRouter } from 'next/router';
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
  const { locale } = useRouter();

  function onEnd () {
    if(once) return;
    setActiveSensor(false);
  }

  function format(n:number) {
    return locale == 'en' ? n.toLocaleString('en') : n.toLocaleString('bn')
  }
  return (
    <>
        <VisibilitySensor partialVisibility offset={{ top: 10 }} active={activeSensor}>
        {({ isVisible }:any) => (
            <span>
                {isVisible ? <CountUp onEnd={onEnd} end={end} formattingFn={format} duration={duration || 1.5}/> : 0}
            </span>
        )}
        </VisibilitySensor>
    </>
  )
}

export default Counter