import './index.css'

import Header from './components/header/Header'
import Keyboard from './components/keyboard/Keyboard'
import Screen from './components/screen/Screen'

import { ThemeContextProvider } from './context/ThemeContext'
import ThemeProvider from './providers/ThemeProvider'
import { useState } from 'react'

function App() {

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

  const props = { handleOperand, handleOperator, answer, operand }

  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <div className='container'>
          <div className='calculator'>

            <Header />
            <div>
              <Screen {...props} />
              <Keyboard {...props} />
            </div>

          </div>
        </div>
      </ThemeProvider>
    </ThemeContextProvider>
  )
}

export default App
