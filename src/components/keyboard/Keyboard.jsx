import { useContext, useState } from 'react';
import styles from './keyboard.module.css';
import { ThemeContext } from '../../context/ThemeContext';

export default function Keyboard({
    handleOperand,
    handleOperator
}) {

    const { theme } = useContext(ThemeContext)

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