import React from 'react';
import styles from './Loading.module.css';

// Option 1: Pure CSS Spinner
const Loading = ({ message = "Loading content...", size = "medium", type = "spinner" }) => {
  let spinnerSizeClass = '';
  if (size === 'small') {
    spinnerSizeClass = styles.spinnerSmall;
  } else if (size === 'large') {
    spinnerSizeClass = styles.spinnerLarge;
  }
  // Add more size classes if you define them in CSS

  return (
    <div className={styles.loadingContainer}>
      {type === "spinner" && (
        <div className={`${styles.spinner} ${spinnerSizeClass}`}></div>
      )}
      {/* You could add more types here, e.g., type === "skeleton" */}
      <p className={styles.loadingText}>{message}</p>
    </div>
  );
};

export default Loading;