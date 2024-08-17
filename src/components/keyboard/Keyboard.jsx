import styles from './keyboard.module.css';

export default function Keyboard() {

    const handleOperator = (e) => {

    }

    const handleOperand = (e) => {
        const value = e.target.value;
    }

    return (
        <>
            <div className={styles.container}>
                <div className='wrapper'>
                    <div className={styles.calculator}>
                        <div className={styles.leftBtns}>
                            <div className={`${styles.topBtns}`}>
                                <button type="button" className={styles.button} value="ac" onClick={handleOperator}>AC</button>
                                <button type="button" className={styles.button} value="pm" onClick={handleOperator}>+/-</button>
                                <button type="button" className={styles.button} value="%" onClick={handleOperator}>%</button>
                            </div>

                            <div className={styles.numBtns}>
                                <button value="1" className={`${styles.btnBackground} ${styles.button}`} onClick={handleOperand}>1</button>
                                <button value="2" className={`${styles.btnBackground} ${styles.button}`} onClick={handleOperand}>2</button>
                                <button value="3" className={`${styles.btnBackground} ${styles.button}`} onClick={handleOperand}>3</button>
                                <button value="4" className={`${styles.btnBackground} ${styles.button}`} onClick={handleOperand}>4</button>
                                <button value="5" className={`${styles.btnBackground} ${styles.button}`} onClick={handleOperand}>5</button>
                                <button value="6" className={`${styles.btnBackground} ${styles.button}`} onClick={handleOperand}>6</button>
                                <button value="7" className={`${styles.btnBackground} ${styles.button}`} onClick={handleOperand}>7</button>
                                <button value="8" className={`${styles.btnBackground} ${styles.button}`} onClick={handleOperand}>8</button>
                                <button value="9" className={`${styles.btnBackground} ${styles.button}`} onClick={handleOperand}>9</button>
                                <button value="." className={`${styles.btnBackground} ${styles.button}`} onClick={handleOperator}>.</button>
                                <button value="0" className={`${styles.btnBackground} ${styles.button}`} onClick={handleOperand}>0</button>
                                <button value="00" className={`${styles.btnBackground} ${styles.button}`} onClick={handleOperand}>00</button>
                            </div>
                        </div>
                        <div className={styles.rightBtns}>
                            <button className={styles.button} value="/" onClick={handleOperator}>÷</button>
                            <button className={styles.button} value="*" onClick={handleOperator}>x</button>
                            <button className={styles.button} value="-" onClick={handleOperator}>-</button>
                            <button className={styles.button} value="+" onClick={handleOperator}>+</button>
                            <button className={`${styles.button} ${styles.btnBackground}`} value="=" onClick={handleOperator}>=</button>
                        </div>

                    </div>
                </div>
                <div className={styles.background}></div>
            </div>
        </>
    );
}