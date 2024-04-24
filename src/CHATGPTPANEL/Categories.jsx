import { MDBBtn } from 'mdb-react-ui-kit'
import React,{useEffect, useState} from 'react'
import Question from './Question'

const Categories = ({categories}) => {
   const [selectedCat,setSelectedCat]= useState("");
    useEffect(()=>{
        setSelectedCat("");
    },[]);

  return (
    <div className='p-4 m-3 '>
       <h1 className='text-center text-dark bg-white p-2'>Click on any Category You want to learn</h1>        
        <div className='bg-success  ' style={{display:"flex" ,justifyContent:"center",alignItems:"center"}}>

          
      {
        categories?.map((c,ind)=>{
          return (<MDBBtn className='p-3 m-2 bg-dark text-white ' key={ind} onClick={()=>setSelectedCat(c.category)} >{c.category}</MDBBtn>)
        })
      }
      </div>
       {
        selectedCat &&
        <Question category={selectedCat}/>
       }
    </div>
  )
}

export default Categories