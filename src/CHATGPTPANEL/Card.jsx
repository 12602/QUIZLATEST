import { MDBAccordion, MDBAccordionItem, MDBBtn, MDBCard, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBRow } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Card = ({c}) => {
  const navigate=useNavigate();
  const [index,setIndex]=useState(0);
    const {Question,Answer}=c[index];
    const next=()=>{
      if(index==c.length-1)
      {
            toast.success("Best of you luck you covered all the questions");
           navigate("/");

      }
      else{
            setIndex(index+1);
      }
    }
      const prev=()=>{
      if(index<0)
      {
          setIndex(0);
      }
      else
      {
            setIndex(index-1);
      }
    }
    const close=()=>{
        navigate("/");
    }
  return (
     <MDBModal className="mt-5 p-5 m-3" tabIndex="-1" open={true} >
      <MDBModalDialog size="xl">
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle> LMS</MDBModalTitle>
          
          </MDBModalHeader>

          <MDBModalBody>
            <p>
             {Question}
            </p>
            <p>{Answer}</p>
          </MDBModalBody>
          
      

          <MDBModalFooter>
              <MDBBtn onClick={()=>prev()} disabled={index==0}>Prev</MDBBtn>
            <MDBBtn onClick={()=>next()}>Next</MDBBtn>
            <MDBBtn onClick={()=>close()}>Close</MDBBtn>
            </MDBModalFooter>

        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  )
}

export default Card