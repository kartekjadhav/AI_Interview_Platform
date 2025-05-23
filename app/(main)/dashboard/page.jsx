import React from 'react'
import WelcomeBoard from './_components/WelcomeBoard'
import CreateOption from './_components/CreateOption'
import PreviousInterviews from './_components/PreviousInterviews'

const DashBoard = () => {
  return (
    <div className='p-5 w-full'>
      <h1 className='text-3xl font-bold my-5'>Dashboard</h1>
      <CreateOption/>
      <h1 className='text-2xl font-bold my-5'>Previously Created Interviews</h1>
      <PreviousInterviews/>
    </div>
  )
}

export default DashBoard