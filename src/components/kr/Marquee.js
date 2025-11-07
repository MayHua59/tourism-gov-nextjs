import React from "react";
import styles from "./Marquee.module.css";

const Marquee = ({ children, speed = 20, direction = "left", className = "" }) => {
  const marqueeClass = direction === "right" ? styles.marqueeReverse : styles.marquee;
  return (
    <div className={`${styles.marqueeWrapper} ${className}`}>
      <div
        className={marqueeClass}
        style={{ "--marquee-speed": `${speed}s` }}
        role="marquee"
      >
        <span className={styles.marqueeContent}>{children}</span>
        <span className={styles.marqueeContent}>{children}</span>
      </div>
    </div>
  );
};

export default Marquee;

