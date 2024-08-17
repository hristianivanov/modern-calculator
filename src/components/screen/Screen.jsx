import styles from './screen.module.css'

export default function Screen() {
    return (
      <div className={`${styles.container} wrapper`}>
        <div className={styles.history}>1.000 × 2 + 2 × 2 </div>
        <div className={styles.sign}>=</div>
        <div className={styles.result}>2004</div>
      </div>  
    );
}