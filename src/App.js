import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function App() {

  const [pressedEquals, setPressedEquals] = useState(false);
  const [numberChanged, setNumberChanged] = useState(false);
  const [dec, setDec] = useState(true);
  const [currNum, setCurrNum] = useState("0");
  const [expToCalculate, setExpToCalculate] = useState([]);

  const calculateResult = (expression) => {

    let start = 0;
    let result = 0;

    while ("+-/*".indexOf(expression[start]) > -1) {
      start++;
    }
    
    if (start > 0 && expression[start-1] === "-") {
      result = Number("-" + expression[start]);
    } else {
      result = Number(expression[start]);
    }

    for (let idx = start+1; idx < expression.length; idx++) {
      if ("+-*/".indexOf(expression[idx]) === -1) {
        if (expression[idx - 1] === "+") {
          result += Number(expression[idx]);
        } else if (expression[idx - 1] === "*") {
          result *= Number(expression[idx]);
        } else if (expression[idx - 1] === "/") {
          if (Number(expression[idx]) === 0) {
            return 0;
          }
          result /= Number(expression[idx]);
        } else if (expression[idx - 1] === "-") {
          if (idx > 1 && "+-*/".indexOf(expression[idx - 2]) !== -1) {
            let number = Number("-" + expression[idx]);
            if (expression[idx - 2] === "+") {
              result += number;
            } else if (expression[idx - 2] === "-") {
              result -= number;
            } else if (expression[idx - 2] === "*") {
              result *= number;
            } else if (expression[idx - 2] === "/") {
              if (number === 0) {
                return 0;
              }
              result /= number;
            }
          } else {
            result -= Number(expression[idx]);
          }
        }
      }
    }

    return result;
  }

  const handleClick = (event) => {
    if (event.target.id === "clear") {
      setCurrNum("0");
      setExpToCalculate([]);
      setDec(true);
    }

    if (event.target.id === "zero") {
      if (pressedEquals) {
        setCurrNum("0");
        setPressedEquals(false);
        setNumberChanged(true);
      } else {
        if (currNum !== "0") {
          setCurrNum(currNum + "0");
          setNumberChanged(true);
        }
      }
    }
    if (event.target.id === "one") {
      if (pressedEquals) {
        setCurrNum("1");
        setPressedEquals(false);
      } else {
        if (currNum === "0") {
          setCurrNum("1");
        } else {
          setCurrNum(currNum + "1");
        }
      }
      setNumberChanged(true);
    }
    if (event.target.id === "two") {
      if (pressedEquals) {
        setCurrNum("2");
        setPressedEquals(false);
      } else {
        if (currNum === "0") {
          setCurrNum("2");
        } else {
          setCurrNum(currNum + "2");
        }
      }
      setNumberChanged(true);
    }
    if (event.target.id === "three") {
      if (pressedEquals) {
        setCurrNum("3");
        setPressedEquals(false);
      } else {
        if (currNum === "0") {
          setCurrNum("3");
        } else {
          setCurrNum(currNum + "3");
        }
      }
      setNumberChanged(true);
    }
    if (event.target.id === "four") {
      if (pressedEquals) {
        setCurrNum("4");
        setPressedEquals(false);
      } else {
        if (currNum === "0") {
          setCurrNum("4");
        } else {
          setCurrNum(currNum + "4");
        }
      }
      setNumberChanged(true);
    }
    if (event.target.id === "five") {
      if (pressedEquals) {
        setCurrNum("5");
        setPressedEquals(false);
      } else {
        if (currNum === "0") {
          setCurrNum("5");
        } else {
          setCurrNum(currNum + "5");
        }
      }
      setNumberChanged(true);
    }
    if (event.target.id === "six") {
      if (pressedEquals) {
        setCurrNum("6");
        setPressedEquals(false);
      } else {
        if (currNum === "0") {
          setCurrNum("6");
        } else {
          setCurrNum(currNum + "6");
        }
      }
      setNumberChanged(true);
    }
    if (event.target.id === "seven") {
      if (pressedEquals) {
        setCurrNum("7");
        setPressedEquals(false);
      } else {
        if (currNum === "0") {
          setCurrNum("7");
        } else {
          setCurrNum(currNum + "7");
        }
      }
      setNumberChanged(true);
    }
    if (event.target.id === "eight") {
      if (pressedEquals) {
        setCurrNum("8");
        setPressedEquals(false);
      } else {
        if (currNum === "0") {
          setCurrNum("8");
        } else {
          setCurrNum(currNum + "8");
        }
      }
      setNumberChanged(true);
    }
    if (event.target.id === "nine") {
      if (pressedEquals) {
        setCurrNum("9");
        setPressedEquals(false);
      } else {
        if (currNum === "0") {
          setCurrNum("9");
        } else {
          setCurrNum(currNum + "9");
        }
      }
      setNumberChanged(true);
    }

    if (event.target.id === "decimal") {
      if (pressedEquals) {
        setCurrNum("0.");
        setDec(false);
        setPressedEquals(false);
        setNumberChanged(true);
      } else if (dec) {
        setCurrNum(currNum + ".");
        setDec(false);
        setNumberChanged(true);
      }
    }

    if (event.target.id === "add") {
      if (pressedEquals) {
        setExpToCalculate([currNum, "+"]);
        setCurrNum("0");
        setNumberChanged(false);
      } else if (expToCalculate.length > -1 && "+-*/".indexOf(expToCalculate.at(-1)) > -1 && !numberChanged) {
        setExpToCalculate([...expToCalculate, "+"]);
        setCurrNum("0");
        setNumberChanged(false);
      } else {
        setExpToCalculate([...expToCalculate, currNum, "+"]);
        setCurrNum("0");
        setDec(true);
        setNumberChanged(false);
      }
    }
    if (event.target.id === "subtract") {
      if (pressedEquals) {
        setExpToCalculate([currNum, "-"]);
        setCurrNum("0");
        setNumberChanged(false);
      } else if (expToCalculate.length > -1 && "+-*/".indexOf(expToCalculate.at(-1)) > -1 && !numberChanged) {
        setExpToCalculate([...expToCalculate, "-"]);
        setCurrNum("0");
        setNumberChanged(false);
      } else {
        setExpToCalculate([...expToCalculate, currNum, "-"]);
        setCurrNum("0");
        setDec(true);
        setNumberChanged(false);
      }
    }
    if (event.target.id === "multiply") {
      if (pressedEquals) {
        setExpToCalculate([currNum, "*"]);
        setCurrNum("0");
        setNumberChanged(false);
      } else if (expToCalculate.length > -1 && "+-*/".indexOf(expToCalculate.at(-1)) > -1 && !numberChanged) {
        setExpToCalculate([...expToCalculate, "*"]);
        setCurrNum("0");
        setNumberChanged(false);
      } else {
        setExpToCalculate([...expToCalculate, currNum, "*"]);
        setCurrNum("0");
        setDec(true);
        setNumberChanged(false);
      }
    }
    if (event.target.id === "divide") {
      if (pressedEquals) {
        setExpToCalculate([currNum, "/"]);
        setCurrNum("0");
        setNumberChanged(false);
      } else if (expToCalculate.length > -1 && "+-*/".indexOf(expToCalculate.at(-1)) > -1 && !numberChanged) {
        setExpToCalculate([...expToCalculate, "/"]);
        setCurrNum("0");
        setNumberChanged(false);
      } else {
        setExpToCalculate([...expToCalculate, currNum, "/"]);
        setCurrNum("0");
        setDec(true);
        setNumberChanged(false);
      }
    }

    if (event.target.id === "equals") {
      setPressedEquals(true);
      let result = calculateResult([...expToCalculate, currNum]);
      setCurrNum(result);
      setDec(true);
      setExpToCalculate([]);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    }
  });

  return (
    <div className="App">
      <Container>
        <div id="display">{currNum}</div>
        <Button id="zero">0</Button>

        <Button id="one">1</Button>
        <Button id="two">2</Button>
        <Button id="three">3</Button>
        <Button id="four">4</Button>
        <Button id="five">5</Button>
        <Button id="six">6</Button>
        <Button id="seven">7</Button>
        <Button id="eight">8</Button>
        <Button id="nine">9</Button>
        <Button id="decimal">.</Button>
        <Button id="clear">C</Button>
        <Button id="add">+</Button>
        <Button id="subtract">-</Button>
        <Button id="multiply">*</Button>
        <Button id="divide">/</Button>
        <Button id="equals">=</Button>
      </Container>
    </div>
  );
}

export default App;
