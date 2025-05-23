'use client';

import React from 'react'
import { useUser } from '../../../provider'
import { Bell } from 'lucide-react';
import Image from 'next/image';

const WelcomeBoard = () => {
    const user = useUser();
    console.log(user);
    
    return (
    <div className='mb-3 border rounded-lg w-full p-6 flex justify-between items-center shadow'>
        <div className='flex-col'>
            <h1 className='font-bold text-2xl' >Welcome back, {user?.user?.name}</h1>
            <p className='mt-2 text-gray-800 text-small'>AI-Powered, Intelligent Interviewing</p>
        </div>
        <div className='flex items-center justify-center' >
            <Bell/>
            {user?.user?.picture && 
                <Image src={user?.user?.picture} alt="User profile picture" width={50} height={1} className="rounded-full ml-4" />
            }
        </div>
    </div>
  )
}

export default WelcomeBoard