import React from 'react';
import styles from '../Scoresheet.module.css';

function ScoreLabels() {
  return (

    <div className="scoreLabels">
        <div className={styles.row}></div>
        <div className={styles.row}><p>Ones</p></div>
        <div className={styles.row}><p>Twos</p></div>
        <div className={styles.row}><p>Threes</p></div>
        <div className={styles.row}><p>Fours</p></div>
        <div className={styles.row}><p>Fives</p></div>
        <div className={styles.row}><p>Sixes</p></div>
        <div className={styles.row}><p>Total</p></div>
        <div className={styles.row}><p>Bonus</p></div>
        <div className={styles.row}><p>Total of upper</p></div>
        <div className={styles.row}><p>3 of a kind</p></div>
        <div className={styles.row}><p>4 of a kind</p></div>
        <div className={styles.row}><p>Full house</p></div>
        <div className={styles.row}><p>Low straight</p></div>
        <div className={styles.row}><p>High straight</p></div>
        <div className={styles.row}><p>Yahtzee</p></div>
        <div className={styles.row}><p>Chance</p></div>
        <div className={styles.row}><p>Grand total</p></div>
    </div>

  );
}

export default ScoreLabels;
