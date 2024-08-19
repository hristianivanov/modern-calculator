import styles from './screen.module.css'

export default function Screen({
  answer,
  operand
}) {
  return (
    <div className={`${styles.container} wrapper`}>
      <div className={styles.history}>{operand ? operand : '0'} </div>
      <div className={styles.sign}>=</div>
      <div className={styles.result}>{answer}</div>
    </div>
  );
}