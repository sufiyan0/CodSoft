'use client'
import React ,{useState}from 'react'
import Form from '@/app/components/Form'
const page = () => {
    const [formApply, setFormApply] = useState(true);

    if(formApply){
      return (
        <div>
          
          <p>form submited</p>
        </div>
      )
    }
    
  return (
    <div><Form /></div>
  )
}

export default page