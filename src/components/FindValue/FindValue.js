import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default function FindValue() {
  const [formData, setFormData] = useState({
    per: '',
    amount: '',
  });
  const [result, setResult] = useState(null);

  const calculator = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: parseFloat(value) });
  };

  useEffect(() => {
    calculate();
  }, [formData]);

  const calculate = () => {
    if (parseFloat(formData.amount) && parseFloat(formData.per)) {
      const value = (formData.amount * formData.per) / 100;
      setResult(value.toFixed(2));
    } else {
      setResult(null);
    }
  };

  return (
    <Container>
      <a id='findValue'></a>
      <fieldset>
        <legend>Find Value from Percetage</legend>
        <Form>
          <Row xs='auto' className='middleAligned text-center text-md-left'>
            <Col xs={12} md={2} lg={1}>
              What is{' '}
            </Col>
            <Col xs={12} md={2} lg={2}>
              <Form.Control
                onKeyUp={calculator}
                name='per'
                type='number'
                placeholder='Percetage'
              />
            </Col>
            <Col xs={12} md={1} lg={1}>
              % of{' '}
            </Col>
            <Col xs={12} md={2} lg={2}>
              <Form.Control
                onKeyUp={calculator}
                name='amount'
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
