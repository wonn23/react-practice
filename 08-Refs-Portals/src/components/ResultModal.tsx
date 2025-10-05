import {forwardRef, useImperativeHandle, useRef} from 'react';
import {createPortal} from 'react-dom';

export interface IResultModal {
  targetTime: number;
  remainingTime: number;
  onReset: () => void;
}

export type ResultModalRef = {
  open: () => void;
};

// forwardRef로 render할 것을 한번 감싸야한다.
const ResultModal = forwardRef<ResultModalRef, IResultModal>(
  ({targetTime, remainingTime, onReset}, ref) => {
    const dialog = useRef<HTMLDialogElement | null>(null);

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current?.showModal();
        },
      };
    });

    return createPortal(
      <dialog ref={dialog} className='result-modal'>
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Your Score! {score}</h2>}
        <p>
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with{' '}
          <strong>{formattedRemainingTime} seconds left.</strong>
        </p>
        <form method='dialog'>
          <button onClick={onReset}>Close</button>
        </form>
      </dialog>,
      document.getElementById('modal') as Element
    );
  }
);
export default ResultModal;
