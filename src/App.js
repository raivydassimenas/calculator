import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  const [result, setResult] = useState(0);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <div id="display">{result}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button id="zero">0</Button>
          </Col>
          <Col>
            <Button id="one">1</Button>
          </Col>
          <Col>
            <Button id="two">2</Button>
          </Col>
          <Col>
            <Button id="three">3</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button id="four">4</Button>
          </Col>
          <Col>
            <Button id="five">5</Button>
          </Col>
          <Col>
            <Button id="six">6</Button>
          </Col>
          <Col>
            <Button id="seven">7</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button id="eight">8</Button>
          </Col>
          <Col>
            <Button id="nine">9</Button>
          </Col>
          <Col>
            <Button id="decimal">.</Button>
          </Col>
          <Col>
            <Button id="clear">C</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button id="add">+</Button>
          </Col>
          <Col>
            <Button id="subtract">-</Button>
          </Col>
          <Col>
            <Button id="multiply">*</Button>
          </Col>
          <Col>
            <Button id="divide">/</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button id="equals">=</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
