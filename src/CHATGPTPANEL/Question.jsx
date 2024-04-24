   import React, { useContext, useEffect, useState } from 'react';
import { MDBAccordion, MDBAccordionItem, MDBCard } from 'mdb-react-ui-kit';

import { toast } from 'react-toastify';
import { QuizContext } from '../AppContext/context/QuizContext';
import Card from './Card';
 
const Question = ({category}) => {
    const {chatGptResp,chatGpt}=useContext(QuizContext);
    
     const [loading,setLoading]=useState(true);      

    
      
 

        useEffect(()=>{
                
                chatGpt(category);
                 
                setLoading(false);
               
                        
        },[]);

        if(loading===true)
        {
            <h1>Loading...</h1>
        }
        console.log(chatGptResp);
   
  return (

            <>{
                chatGptResp.length>0 ?<>
                   <Card c={chatGptResp}/>
                
                </>:<div className='text-center p-5 mt-3'><h1 className='text-white bg-primary text-center'>Loading....</h1></div>
            }
           
            
            </>
                  
            
       
   
  );
}
  

export default Question