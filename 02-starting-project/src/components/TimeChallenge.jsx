import { useState, useRef } from "react";

import ResultModal from "./ResultModal.jsx";

// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  //   const [timerStarted, setTimerStarted] = useState(false);
  //   const [timerExpired, setTimerExpired] = useState(false);
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  let temp = remainingTime <= 0;
  let timerStarted = remainingTime > 0 && remainingTime < targetTime * 1000;
  if (temp) {
    clearInterval(timer.current);
    setRemainingTime(targetTime * 1000);
    dialog.current.open();
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={remainingTime}
        result="lost"
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
