'use client';
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { InterviewTypes } from '../../../../../services/Constants'
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../../../components/ui/button'


const FormContainer = ({onChangeHandler}) => {
    const [interviewType, setInterviewType] = useState([])

    function handleInterviewType(title){
        if (interviewType.includes(title)){
            setInterviewType(
                interviewType.filter((type) => {
                    return type !== title
                })
            )
        }
        else{
            setInterviewType(prev => [...prev, title])
        }
    }


    useEffect(() => {
        if(interviewType){
            onChangeHandler('interviewType', interviewType)
        }
    }, [interviewType])

  return (
    <form action={'#'} className='flex flex-col gap-4'>
        <div>
            <p className='mb-1 font-medium text-gray-700'>Job Position</p>
            <Input  placeholder="Eg. Full Stack Engineer"
                    onChange={(e) => onChangeHandler("jobPosition", e.target.value)} />
        </div>
        <div>
            <p className='mb-1 font-medium text-gray-700'>Job Description</p>
            <Textarea   placeholder="Enter Job Description" className='h-30'
                        onChange={(e) => onChangeHandler("jobDescription", e.target.value)} />
        </div>
        <div>
            <p className='mb-1 font-medium text-gray-700'>Interview Duration</p>
            <Select onValueChange={(value) => onChangeHandler("duration", value)} >
                <SelectTrigger className="w-[180px] cursor-pointer">
                    <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem className='cursor-pointer' value="5">5 min</SelectItem>
                    <SelectItem className='cursor-pointer' value="15">15 min</SelectItem>
                    <SelectItem className='cursor-pointer' value="30">30 min</SelectItem>
                    <SelectItem className='cursor-pointer' value="45">45 min</SelectItem>
                </SelectContent>
            </Select>

        </div>
        <div>
            <p className='mb-1 font-medium text-gray-700'>
                Interview Types
            </p>
            <div className='flex gap-2 flex-wrap'>
                {InterviewTypes.map((itype, index) => {
                    return <div key={index} 
                                className={`cursor-pointer flex gap-2 border rounded-lg px-3 py-2 ${interviewType.includes(itype.title) ? "bg-blue-200" : ""} `}
                                onClick={() => handleInterviewType(itype.title)}>
                                <itype.icon/>
                                <span>{itype.title}</span>
                            </div>
                })}
            </div>
        </div>

        <div className='mt-2'>
            <Button>
                Submit <ArrowRight/>
            </Button>
        </div>
    </form>
  )
}

export default FormContainer