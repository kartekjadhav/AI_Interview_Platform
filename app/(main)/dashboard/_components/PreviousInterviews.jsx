'use client';
import React, { useState } from 'react'
import { Plus, Video } from 'lucide-react';
import { Button } from '../../../../components/ui/button'
import Link from 'next/link';

const PreviousInterviews = () => {
    const [prevInterviews, setPrevInterviews] = useState([])

  return (
    <div>
        {prevInterviews.length === 0 && 
            <div className='w-full p-10 flex flex-col gap-4 items-center justify-center'>
                <Video size={50} />
                <p className='text-xl text-gray-800' >You have not created any Interview yet!</p>
                <Link href={'/dashboard/createInterview'} >
                    <Button className='cursor-pointer' >Create Interview <Plus/> </Button>
                </Link>
            </div>
        }
    </div>
  )
}

export default PreviousInterviews