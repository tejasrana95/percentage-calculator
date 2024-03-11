import React, { useEffect, useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import styles from './Gst.scss';
export default function Gst() {
  const [formData, setFormData] = useState({
    gstRate: 18,
    amountExcluding: '',
    amountIncluding: '',
    gstAmount: '',
  });
  const [result, setResult] = useState(null);
  const [fieldChange, setFieldChange] = useState('');

  const calculator = (event) => {
    const { name, value } = event.target;
    const tempObj = {
      gstRate: formData.gstRate,
    };
    setFormData({ ...tempObj, [name]: Number(value) });
    setFieldChange(name);
  };

  useEffect(() => {
    if (fieldChange === 'amountExcluding') {
      calculateUsingExcludingGst();
    }
    if (fieldChange === 'amountIncluding') {
      calculateUsingIncludingGst();
    }
    if (fieldChange === 'gstAmount') {
      calculateUsingGSTAmount();
    }
  }, [
    fieldChange,
    formData.gstRate,
    formData.amountExcluding,
    formData.amountIncluding,
    formData.gstAmount,
  ]);

  const calculateUsingExcludingGst = () => {
    if (Number(formData.gstRate) && parseFloat(formData.amountExcluding)) {
      // amount excluding
      const GSTPercentage = parseFloat(formData.gstRate); // GST percentage
      const GSTAmount =
        (parseFloat(formData.amountExcluding) * GSTPercentage) / 100;

      const amountIncludingGST = formData.amountExcluding + GSTAmount;
      const amountExcludingGST = formData.amountExcluding;
      setFormData({
        gstRate: Number(formData.gstRate),
        gstAmount: parseFloat(GSTAmount.toFixed(2)),
        amountIncluding: parseFloat(amountIncludingGST.toFixed(2)),
        amountExcluding: parseFloat(amountExcludingGST.toFixed(2)),
      });
      const stringOutput = `<strong>IGST</strong> - Rs ${GSTAmount.toFixed(
        2
      )} or <br/>
      <strong>CGST</strong> - Rs ${(GSTAmount.toFixed(2) / 2).toFixed(
        2
      )} + <strong>SGCT/UTGST</strong> - Rs ${(
        GSTAmount.toFixed(2) / 2
      ).toFixed(2)}
      `;
      setResult(`${stringOutput}`);
    } else {
      setResult(``);
    }
  };

  const calculateUsingIncludingGst = () => {
    console.log('calculateIncludingGst', formData);
    if (Number(formData.gstRate) && parseFloat(formData.amountIncluding)) {
      // amount excluding
      const GSTPercentage = parseFloat(formData.gstRate); // GST percentage

      const amountExcludingGST =
        formData.amountIncluding / (1 + GSTPercentage / 100);
      const gstAmount = formData.amountIncluding - amountExcludingGST;

      setFormData({
        gstRate: Number(formData.gstRate),
        gstAmount: parseFloat(gstAmount.toFixed(2)),
        amountIncluding: parseFloat(formData.amountIncluding.toFixed(2)),
        amountExcluding: parseFloat(amountExcludingGST.toFixed(2)),
      });
      const stringOutput = `<strong>IGST</strong> - Rs ${gstAmount.toFixed(
        2
      )} or <br/>
      <strong>CGST</strong> - Rs ${(gstAmount.toFixed(2) / 2).toFixed(
        2
      )} + <strong>SGCT/UTGST</strong> - Rs ${(
        gstAmount.toFixed(2) / 2
      ).toFixed(2)}
      `;
      setResult(`${stringOutput}`);
    } else {
      setResult(``);
    }
  };

  const calculateUsingGSTAmount = () => {
    console.log('calculateIncludingGst', formData);
    if (Number(formData.gstRate) && parseFloat(formData.gstAmount)) {
      // amount excluding
      const GSTPercentage = parseFloat(formData.gstRate); // GST percentage

      const amountExcludingGST =
        parseFloat(formData.gstAmount) / (GSTPercentage / 100);
      const amountIncludingGST =
        amountExcludingGST + parseFloat(formData.gstAmount);

      setFormData({
        gstRate: Number(formData.gstRate),
        gstAmount: parseFloat(formData.gstAmount.toFixed(2)),
        amountIncluding: parseFloat(amountIncludingGST.toFixed(2)),
        amountExcluding: parseFloat(amountExcludingGST.toFixed(2)),
      });
      const stringOutput = `<strong>IGST</strong> - Rs ${formData.gstAmount.toFixed(
        2
      )} or <br/>
      <strong>CGST</strong> - Rs ${(formData.gstAmount.toFixed(2) / 2).toFixed(
        2
      )} + <strong>SGCT/UTGST</strong> - Rs ${(
        formData.gstAmount.toFixed(2) / 2
      ).toFixed(2)}
      `;
      setResult(`${stringOutput}`);
    } else {
      setResult(``);
    }
  };

  return (
    <Container>
      <a id='gst'></a>
      <fieldset>
        <legend>GST</legend>
        <Form>
          <Row xs={1} className='justify-content-md-center middleAligned text-center text-md-left'>
            <Col xs={12} md={3} lg={3}>
              <FloatingLabel controlId='floatingInput' label='Select GST Rate'>
                <Form.Select
                  aria-label='Select GST Rate'
                  name='gstRate'
                  defaultValue={18}
                  onChange={calculator}
                >
                  <option value='0.25'>0.25%</option>
                  <option value='3'>3%</option>
                  <option value='5'>5%</option>
                  <option value='12'>12%</option>
                  <option value='18'>18%</option>
                  <option value='28'>28%</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <FloatingLabel
                controlId='floatingInput'
                label='Amount excluding GST'
              >
                <Form.Control
                  onChange={calculator}
                  name='amountExcluding'
                  type='number'
                  placeholder='Amount excluding GST'
                  value={formData.amountExcluding}
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <FloatingLabel
                controlId='floatingInput'
                label='Amount including GST'
              >
                <Form.Control
                  onChange={calculator}
                  name='amountIncluding'
                  type='number'
                  placeholder='Amount including GST'
                  value={formData.amountIncluding}
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <FloatingLabel controlId='floatingInput' label='GST Amount'>
                <Form.Control
                  onChange={calculator}
                  name='gstAmount'
                  type='number'
                  placeholder='GST Amount'
                  value={formData.gstAmount}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row xs={1} className='justify-content-md-center middleAligned'>
            <Col xs={12} md={12} lg={12} className='ans gstAns'>
              <span dangerouslySetInnerHTML={{ __html: result }}></span>
            </Col>
          </Row>
        </Form>
      </fieldset>
    </Container>
  );
}
