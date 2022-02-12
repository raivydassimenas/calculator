import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function App() {

  const [isAfterEquals, setAfterEquals] = useState(false);
  const [dec, setDec] = useState(true);
  const [currNum, setCurrNum] = useState("0");
  const [expToCalculate, setExpToCalculate] = useState([]);

  const calculateResult = useCallback(() => {
    let result = Number(expToCalculate[0]);
    for (let idx = 1; idx < expToCalculate.length; idx++) {
      if ("+-*/".indexOf(expToCalculate[idx]) === -1) {
        if (expToCalculate[idx - 1] === "+") {
          result += Number(expToCalculate[idx]);
        } else if (expToCalculate[idx - 1] === "*") {
          result *= Number(expToCalculate[idx]);
        } else if (expToCalculate[idx - 1] === "/") {
          if (Number(expToCalculate[idx]) === 0) {
            return 0;
          }
          result /= Number(expToCalculate[idx]);
        } else if (expToCalculate[idx - 1] === "-") {
          if (idx > 1 && "+-*/".indexOf(expToCalculate[idx - 2]) !== -1) {
            let number = Number("-" + expToCalculate[idx]);
            if (expToCalculate[idx - 2] === "+") {
              result += number;
            } else if (expToCalculate[idx - 2] === "-") {
              result -= number;
            } else if (expToCalculate[idx - 2] === "*") {
              result *= number;
            } else if (expToCalculate[idx - 2] === "/") {
              if (number === 0) {
                return 0;
              }
              result /= number;
            }
          } else {
            result -= Number(expToCalculate[idx]);
          }
        }
      }
    }

    return result;
  }, [expToCalculate]);

  const handleClick = (event) => {
    if (event.target.id === "clear") {
      setCurrNum("0");
      setExpToCalculate([]);
      setDec(true);
    } else if (event.target.id === "zero" && !dec) {
      setCurrNum(currNum + "0");
    } else if (event.target.id === "one") {
      if (currNum === "0") {
        setCurrNum("1");
      } else {
        setCurrNum(currNum + "1");
      }
    } else if (event.target.id === "two") {
      if (currNum === "0") {
        setCurrNum("2");
      } else {
        setCurrNum(currNum + "2");
      }
    } else if (event.target.id === "three") {
      if (currNum === "0") {
        setCurrNum("3");
      } else {
        setCurrNum(currNum + "3");
      }
    } else if (event.target.id === "four") {
      if (currNum === "0") {
        setCurrNum("4");
      } else {
        setCurrNum(currNum + "4");
      }
    } else if (event.target.id === "five") {
      if (currNum === "0") {
        setCurrNum("5");
      } else {
        setCurrNum(currNum + "5");
      }
    } else if (event.target.id === "six") {
      if (currNum === "0") {
        setCurrNum("6");
      } else {
        setCurrNum(currNum + "6");
      }
    } else if (event.target.id === "seven") {
      if (currNum === "0") {
        setCurrNum("7");
      } else {
        setCurrNum(currNum + "7");
      }
    } else if (event.target.id === "eight") {
      if (currNum === "0") {
        setCurrNum("8");
      } else {
        setCurrNum(currNum + "8");
      }
    } else if (event.target.id === "nine") {
      if (currNum === "0") {
        setCurrNum("9");
      } else {
        setCurrNum(currNum + "9");
      }
    } else if (event.target.id === "decimal" && dec) {
      setCurrNum(currNum + ".");
      setDec(false);
    }

    if (event.target.id === "add") {
      setExpToCalculate([...expToCalculate, currNum, "+"]);
      setCurrNum("0");
      setDec(true);
    } else if (event.target.id === "subtract") {
      setExpToCalculate([...expToCalculate, currNum, "-"]);
      setCurrNum("0");
      setDec(true);
    } else if (event.target.id === "multiply") {
      setExpToCalculate([...expToCalculate, currNum, "*"]);
      setCurrNum("0");
      setDec(true);
    } else if (event.target.id === "divide") {
      setExpToCalculate([...expToCalculate, currNum, "/"]);
      setCurrNum("0");
      setDec(true);
    } else if (event.target.id === "equals") {
      setExpToCalculate([...expToCalculate, currNum]);
      setAfterEquals(true);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    }
  });

  useEffect(() => {
    if (isAfterEquals) {
      setCurrNum((+calculateResult().toFixed(4)).toString());
      setAfterEquals(false);
    }

  }, [isAfterEquals, calculateResult])

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
