import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default function IncreaseDecrease() {
  const [formData, setFormData] = useState({
    value1: '',
    value2: '',
  });
  const [result, setResult] = useState(null);

  const calculator = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    calculate();
  }, [formData]);

  const calculate = () => {
    if (parseFloat(formData.value2) && parseFloat(formData.value1)) {
      const difference = formData.value2 - formData.value1;
      const percentage =
        (parseFloat(difference) / parseFloat(formData.value1)) * 100;
      setResult(`${percentage.toFixed(2)}%`);
    } else {
      setResult(``);
    }
  };

  return (
    <Container>
      <a id='increase-Decrease'></a>
      <fieldset>
        <legend>What is the Percentage Increase/Decrease</legend>
      <Form>
        <Row xs={1} className='justify-content-md-center middleAligned text-center text-md-left'>
          <Col xs={12} md={1} lg={1}>
            From
          </Col>
          <Col xs={12} md={2} lg={2}>
            <Form.Control
              onKeyUp={calculator}
              name='value1'
              type='number'
              placeholder='Value'
            />
          </Col>
          <Col xs={12} md={1} lg={1}>
            to
          </Col>
          <Col xs={12} md={2} lg={2}>
            <Form.Control
              onKeyUp={calculator}
              name='value2'
              type='number'
              placeholder='Value'
            />
          </Col>
          <Col xs={12} md={1} lg={1}>
            ?
          </Col>
          <Col xs={12} md={1} lg={1}>
            =
          </Col>

          <Col xs={12} md={3} lg={4} className='ans'>
            {result}
          </Col>
        </Row>
      </Form>
      </fieldset>
    </Container>
  );
}
