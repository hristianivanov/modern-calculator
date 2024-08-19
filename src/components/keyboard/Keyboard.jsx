import { useContext, useState } from 'react';
import styles from './keyboard.module.css';
import { ThemeContext } from '../../context/ThemeContext';

export default function Keyboard() {

    const { theme } = useContext(ThemeContext)

    const [prevAnswer, setPrevAnswer] = useState("");
    const [answer, setAnswer] = useState("0");
    const [operand, setOperand] = useState("");

    const handleOperator = (e) => {
        const value = e.target.value;


        if (value === "=") {
            if (operand === "") return;
        }

        // if no value in operand stop 
        if (value === "ac") {
            setOperand("");
            setAnswer(0);

            // Check if we have a prev answer > 0
            if (answer > 0)
                setPrevAnswer(answer);
            return;
        }

        // handle plush and minus sign
        if (value === "pm") {
            if (operand === "") return;
            //get the last char
            let calculated;
            if (Number(operand.slice(-1))) {
                calculated = eval(operand);

                if (Math.sign(calculated) < 0) {
                    calculated = Math.abs(calculated);
                    setOperand(calculated.toString());
                } else {
                    setOperand(`-` + calculated.toString());
                }

            } else {
                calculated = (eval(operand.slice(0, -1)));
                if (Math.sign(calculated)) {
                    setOperand((`-` + calculated.toString()))
                } else {
                    setOperand((calculated.toString()))
                }
            }
            return;
        }

        /* last test for users */
        if (value === "%") {
            if (operand === "") return;
        }

        let newOperand;
        // get last operand value
        if (operand.slice(-1) === value) {
            newOperand = operand.slice(0, -1);
            setOperand(newOperand + value);
        } else {
            // get the last input operator & check if is a number
            if (!Number(operand.slice(-1))) {
                // remove the last selected char
                newOperand = operand.slice(0, -1);

                // checks if the last operand contains a zero
                if (Number(operand.slice(-1)) === 0) {
                    setOperand(newOperand + `0` + value); return
                } else {
                    setOperand(newOperand + value);
                    return;
                }

            } else if (operand.slice(-1) === "ac") {

                setOperand("");
                // Check if we have a prev answer > 0
                if (answer > 0)
                    setAnswer(0)
            }
            else if (operand.includes("/")) {
                newOperand = eval(operand);
                setOperand(newOperand);
            }
        }


        // if the last inputed digit is not a number stop
        const lastDigit = operand.slice(-1);
        if (!Number(lastDigit)) return;

        // if Dot(.) exists don't add again
        if (!(operand === "." || operand.includes("."))) {
            setOperand(operand => operand + value);
        }

        // Swicth for some arithmetic operations
        switch (value) {
            case "ac":
                setOperand("");
                break;
            case "+":
                setOperand(eval(operand) + value)
                break;
            case "-":
                setOperand(`${eval(operand)}${value}`)
                break;
            case "*":
                setOperand(`${eval(operand)}${value}`)
                break;
            case "%":
                console.log('percentage + Test for all viewers')
                break;
            case "/":
                setOperand(`${eval(operand)}${value}`);
                break;
            case "=":
                setOperand("");
                setAnswer(eval(operand));
                if (answer > 0)
                    setPrevAnswer(answer);
                break;
            default:
                return;
        }

    }

    const handleOperand = (e) => {
        const value = e.target.value;

        setOperand(operand => operand + value);
    }

    return (
        <>
            <div className={`${styles.containerS} wrapper`}>
                <div className={styles.history}>{operand ? operand : ''} </div>
                <div className={styles.sign}>=</div>
                <div className={styles.result}>{answer}</div>
            </div>
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
                {theme === "dark" &&
                    <svg className={styles.svg} width="423" height="507" viewBox="0 0 423 507" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_2_78)">
                            <path d="M697.404 -24.1603C819.447 325.921 820.324 583.616 315.636 503.575C-7.67762 350.43 -155.022 587.082 -481.876 488.638C-246.465 -103.199 -160.092 354.76 45.0564 266.06C300.809 155.48 136.128 -793.125 697.404 -24.1603Z" fill="url(#paint0_linear_2_78)" />
                        </g>
                        <defs>
                            <filter id="filter0_f_2_78" x="-845.876" y="-686.261" width="1974.7" height="1568.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="182" result="effect1_foregroundBlur_2_78" />
                            </filter>
                            <linearGradient id="paint0_linear_2_78" x1="641.33" y1="-233.083" x2="-123.056" y2="690.561" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0238694" stopColor="#42869B" />
                                <stop offset="0.277847" stopColor="#2A7DA1" />
                                <stop offset="0.650876" stopColor="#224E91" />
                                <stop offset="1" stopColor="#00123F" />
                            </linearGradient>
                        </defs>
                    </svg>
                }
            </div>
        </>
    );
}