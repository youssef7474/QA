import React from 'react';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { QData } from '../QData';
const Qa = ({Data,deleteOneItem}) => {

  const deleteitem=(itemId)=>{
    if(QData.length>=1){
      const index =QData.findIndex((el)=>el.id===itemId);
      QData.splice(index,1)
      deleteOneItem(QData)
    }
  }


  const LocalData=JSON.parse(localStorage.getItem('Data'))


  return (
    <div className='py-5'>
    <Accordion>
    {
      LocalData != null ?(
        LocalData.map((el,idx)=>{
            return(
                <Accordion.Item key={idx} eventKey={el.id}>
                    <Accordion.Header>{el.Question} </Accordion.Header>
                    <Accordion.Body style={{display:"flex",flexDirection:"column",gap:"10px"}}>

                    <div style={{textAlign:"start"}}> {el.Answer}</div>
                    <Button style={{width:"fit-content"}} onClick={()=>deleteitem(el.id)}>مسح السؤال</Button>

                    </Accordion.Body>
                    </Accordion.Item>
            )
        })
       ):<h2 className='fs-4 text-center p-5'> لا يوجد اسئله الان</h2>
    }
    
  </Accordion>
    </div>
  );
}

export default Qa;
