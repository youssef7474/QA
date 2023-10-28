import React, { useState } from 'react';
import {Button, Col, Container, Row} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import FormInput from './Compounts/FormInput';
import Qa from './Compounts/Qa';
import { QData } from './QData';
const App = () => {


  const [Data,SetData]=useState(QData)

  const DeleteAll=()=>{
    QData.splice(0,QData.length)
    localStorage.removeItem('Data')
    SetData([])
  }



  const deleteOneItem=(Data)=>{
    localStorage.setItem('Data',JSON.stringify(Data))
    SetData([...Data])
    if(Data<=0){
      DeleteAll()
    }
  }
 

  const onAdd=()=>{
    localStorage.setItem('Data',JSON.stringify([...QData]))
    SetData([...QData])
  }



  const LocalData=JSON.parse(localStorage.getItem('Data'))

  return (
    <div className='font .color-body text-center'>
      <Container className='py-5'>


      <Row style={{justifyContent:"center"}}>

        <Col sm="4">
        
          <div className='fs-3 text-center py-2'>اسئله و اجوبه شائعه</div>

        </Col>



        <Col sm="8">

          <FormInput onAdd={onAdd}></FormInput>
        
        </Col>

        <Qa Data={Data} deleteOneItem={deleteOneItem}></Qa>
        {
          LocalData != null?(<Button onClick={DeleteAll} style={{width:"fit-content"}} >مسح الكل</Button>):null
        }


      </Row>


      </Container>
    </div>
  );
}

export default App;
