import { useEffect, useState } from 'react'

function Timer () {
    const [timer, setTimer] = useState(10)

    useEffect(() => {
      if (timer <= 0) return;
  
      const timeout = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }, [timer]);
    
    return (
      <div className='timer'>
        <h1>Таймер👇</h1>
        <p>{timer}</p>
      </div>
    )
}

export default Timer;