'use client';
import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import FormContainer from './_components/FormContainer'

const CreateInterview = () => {
  const [formData, setFormData] = useState({})
  
  function onChangeHandler(field, value){
    setFormData(prev => ({...prev, [field]:value}))
    console.log(formData);
    
  }

  return (
    <div className='border px-10 py-10 md:mx-50 xl:mx-100 rounded-lg flex-col items-center'>
      <div className='flex gap-5 items-center'>
        <ArrowLeft size={30} className='text-white bg-black rounded' /> <span className='text-xl font-bold'>Create New Interview</span>
      </div>
      <Progress value={(Object.keys(formData).length % 10) * 10} className='my-5' />
      <FormContainer onChangeHandler={onChangeHandler} />
    </div>
  )
}

export default CreateInterview