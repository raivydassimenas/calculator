import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function App() {

  const [currNum, setCurrNum] = useState(0);
  const [expToCalculate, setExpToCalculate] = useState([]);
  const [outputQueue, setOutputQueue] = useState([]);
  const [operatorStack, setOperatorStack] = useState([]);

  const calculateResult = () => {
    return 0;
  }

  const handleClick = (event) => {
    if (event.target.id === "clear") {
      setCurrNum(0);
      setExpToCalculate([]);
      setOutputQueue([]);
      setOperatorStack([]);
    } else if (event.target.id === "zero") {
      setCurrNum(currNum => currNum * 10);
    } else if (event.target.id === "one") {
      setCurrNum(currNum => currNum * 10 + 1);
    } else if (event.target.id === "two") {
      setCurrNum(currNum => currNum * 10 + 2);
    } else if (event.target.id === "three") {
      setCurrNum(currNum => currNum * 10 + 3);
    } else if (event.target.id === "four") {
      setCurrNum(currNum => currNum * 10 + 4);
    } else if (event.target.id === "five") {
      setCurrNum(currNum => currNum * 10 + 5);
    } else if (event.target.id === "six") {
      setCurrNum(currNum => currNum * 10 + 6);
    } else if (event.target.id === "seven") {
      setCurrNum(currNum => currNum * 10 + 7);
    } else if (event.target.id === "eight") {
      setCurrNum(currNum => currNum * 10 + 8);
    } else if (event.target.id === "nine") {
      setCurrNum(currNum => currNum * 10 + 9);
    } else if (event.target.id === "add") {
      setExpToCalculate([...expToCalculate, currNum, "+"]);
      setCurrNum(0);
    } else if (event.target.id === "subtract") {
      setExpToCalculate([...expToCalculate, currNum, "-"]);
      setCurrNum(0);
    } else if (event.target.id === "multiply") {
      setExpToCalculate([...expToCalculate, currNum, "*"]);
      setCurrNum(0);
    } else if (event.target.id === "divide") {
      setExpToCalculate([...expToCalculate, currNum, "/"]);
      setCurrNum(0);
    } else if (event.target.id === "equals") {
      setCurrNum(calculateResult());
      setExpToCalculate([]);
      setOutputQueue([]);
      setOperatorStack([]);
    }

    console.log(expToCalculate);
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
