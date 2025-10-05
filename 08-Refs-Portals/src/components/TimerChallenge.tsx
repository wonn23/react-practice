import {useRef, useState} from 'react';
import ResultModal from './ResultModal';

interface ITimerChallenge {
  title: string;
  targetTime: number;
}

const TimerChallenge = ({title, targetTime}: ITimerChallenge) => {
  const timer = useRef<number | null>(null);
  const dialog = useRef<{open: () => void} | null>(null);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    if (timer.current) clearInterval(timer.current);
    dialog.current?.open();
  }
  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  /**
   *  타이머가 만료되면 showModal()을 통해 모달을 띄우고 싶다.
   *  이 로직은 부모 컴포넌트에서 관리하고 싶기 때문에 ref로 자식 컴포넌트에 넘긴다.
   */
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    if (timer.current) clearInterval(timer.current);
    dialog.current?.open();
  };

  return (
    <>
      {
        <ResultModal
          ref={dialog}
          targetTime={targetTime}
          remainingTime={timeRemaining}
          onReset={handleReset}
        />
      }
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? 'Stop Challenge' : 'Start Challenge'}
        </button>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
