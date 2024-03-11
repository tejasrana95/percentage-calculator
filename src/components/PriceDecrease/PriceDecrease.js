import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default function PriceDecrease() {
  const [formData, setFormData] = useState({
    value1: '',
    per: '',
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
    if (parseFloat(formData.value1) && parseFloat(formData.per)) {
      const percentage = (formData.value1 * formData.per) / 100;
      const result = parseFloat(formData.value1) - parseFloat(percentage);
      setResult(`${result.toFixed(2)}`);
    } else {
      setResult(``);
    }
  };

  return (
    <Container>
      <a id='price-decrease'></a>
      <fieldset>
        <legend>Price Decrease</legend>
      <Form>
        <Row xs={1} className='justify-content-md-center middleAligned text-center text-md-left'>
          <Col xs={12} md={2} lg={2}>
            <Form.Control
              onKeyUp={calculator}
              name='value1'
              type='number'
              placeholder='Value'
            />
          </Col>
          <Col xs={12} md={2} lg={2}>
            Decrease
          </Col>
          <Col xs={12} md={2} lg={2}>
            <Form.Control
              onKeyUp={calculator}
              name='per'
              type='number'
              placeholder='Value'
            />
          </Col>
          <Col xs={12} md={1} lg={1}>
            %
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
