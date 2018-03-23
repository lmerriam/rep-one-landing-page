import React from 'react';
import styles from './styles.scss';

function Insights() {
  return (
    <div className={styles.section} id="insights">
      <div className={styles.main}>
        <h1>Insights you can only get with RepOne</h1>
        <h2>
          Industry-leading inductive 3D sensing gives you new ways to measure and enhance
          performance.
        </h2>
        <div className={styles.diagram}>
          <div className={styles.diagramcontainer}>
            <img src={require('src/images/deadlift_guy.001.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
