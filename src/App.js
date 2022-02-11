import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  const [result, setResult] = useState(0);

  const handleClick = (event) => {
    if (event.target.id === "clear") {
      setResult(0);
    } else if (event.target.id === "zero") {
      setResult(result => result * 10);
    } else if (event.target.id === "one") {
      setResult(result => result * 10 + 1);
    } else if (event.target.id === "two") {
      setResult(result => result * 10 + 2);
    } else if (event.target.id === "three") {
      setResult(result => result * 10 + 3);
    } else if (event.target.id === "four") {
      setResult(result => result * 10 + 4);
    } else if (event.target.id === "five") {
      setResult(result => result * 10 + 5);
    } else if (event.target.id === "six") {
      setResult(result => result * 10 + 6);
    } else if (event.target.id === "seven") {
      setResult(result => result * 10 + 7);
    } else if (event.target.id === "eight") {
      setResult(result => result * 10 + 8);
    } else if (event.target.id === "nine") {
      setResult(result => result * 10 + 9);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    }
  }, []);

  return (
    <div className="App">
      <Container>
        <div id="display">{result}</div>
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
