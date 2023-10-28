import React, { useState } from 'react';
import { Button,  Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { QData } from '../QData';

const FormInput = ({onAdd}) => {

  const [Question,setQuestion]=useState('')
  const [Answer,setAnswer]=useState('')

  const formHndler=(e)=>{
    e.preventDefault();
    QData.push({id:Math.random(),Question,Answer})
    setQuestion('')
    setAnswer('')
    onAdd()
  }

  return (
    <div>
      <Row>
      
      <Form onSubmit={formHndler} >

   
      

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>السأل</Form.Label>
        <Form.Control value={Question} type="text" placeholder="ادخل السؤال" onChange={(e)=>setQuestion(e.target.value)} />
        </Form.Group>


    

      
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>الجواب</Form.Label>
        <Form.Control value={Answer} type="text" placeholder="ادخل الجواب" onChange={(e)=>setAnswer(e.target.value)} />
      </Form.Group>



      
      
    <Button type='submit'>اضافه</Button>
      

    </Form>
      
      </Row>
    </div>
  );
}

export default FormInput;
