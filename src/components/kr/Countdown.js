'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Countdown.module.css";

function getTimeParts(ms) {
  let totalSeconds = Math.max(Math.floor(ms / 1000), 0);
  const days = Math.floor(totalSeconds / (24 * 3600));
  totalSeconds %= 24 * 3600;
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

const Countdown = ({
  start,
  end,
  message = "Countdown",
  slogan,
  dateText,
  logo,
  finishedMessage = "Countdown finished!",
  removeDelay = 3000, // ms: how long to show message after finish
}) => {
  const startDate = start ? new Date(start) : new Date();
  const endDate = new Date(end);

  const [timeLeft, setTimeLeft] = useState(getTimeParts(endDate - Date.now()));
  const [started, setStarted] = useState(Date.now() >= startDate);
  const [finished, setFinished] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleFinish = () => {
    setFinished(true);
    // Remove countdown after delay
    setTimeout(() => setVisible(false), removeDelay);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      if (now < startDate) {
        setStarted(false);
        setTimeLeft(getTimeParts(endDate - startDate));
      } else {
        setStarted(true);
        const diff = endDate - now;
        setTimeLeft(getTimeParts(diff));
        if (diff <= 0 && !finished) {
          clearInterval(timer);
          handleFinish();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [start, end, finished]);

  if (!visible) return null;

  return (
    <div className={styles.container}>
      {logo && <Image src={logo} alt="Logo" className={styles.logo} width={300} height={100} />}
      <div className={styles.message}>{message}</div>
     {slogan && <div className={styles.slogan}>{slogan}</div>}
      {dateText && <div className={styles.dateText}>{dateText}</div>}
      {!started ? (
        <div className={styles.notStarted}>Countdown not started yet.</div>
      ) : finished ? (
        <div className={styles.finished}>{finishedMessage}</div>
      ) : (
        <div className={styles.countdown}>
          <span className={styles.part}>{timeLeft.days}d</span>
          <span className={styles.part}>{timeLeft.hours}h</span>
          <span className={styles.part}>{timeLeft.minutes}m</span>
          <span className={styles.part}>{timeLeft.seconds}s</span>
        </div>
      )}
    </div>
  );
};

export default Countdown;

