import React from 'react'
import { Video } from 'lucide-react';
import { Phone } from 'lucide-react';
import Link from 'next/link';

const CreateOption = () => {
  return (
    <div className='grid grid-cols-2 gap-5'>
        <Link href={'/dashboard/createInterview'} className='border p-3 flex-col rounded-lg shadow' >
            <Video className='bg-black rounded-small text-white rounded p-1' size={40} />
            <h1 className='font-medium mt-2'>Create New Interview</h1>
            <p className='mt-2'>Create AI Interviews and schedule them</p>
        </Link>
        <Link href={'/dashboard/createInterview'} className='border p-3 flex-col rounded-lg shadow' >
            <Phone className='bg-black rounded-small text-white rounded p-1' size={40}/>
            <h1 className='font-medium mt-2'>Create Phone Screen Call</h1>
            <p className='mt-2'>Schedule Phone call with candidates</p>
        </Link>
    </div>
  )
}

export default CreateOption