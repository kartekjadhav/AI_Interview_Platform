import React from 'react'
import { Button } from '../../components/ui/button'
import { supabase } from '../../services/supabaseClient'
import GoogleSigninButton from '../../components/GoogleSigninButton'
import GithubSigninButton from '../../components/GithubSigninButton'

const Login = () => {  
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='border p-5 rounded-lg flex flex-col items-center shadow'>
        <img src="/signup.png" alt="logo" className='w-100 rounded-lg' />
        <h1 className='text-3xl mt-2 font-bold' >Welcome to Interviewly.io</h1>
        <p className='mt-1' >Login with your Github or Google Account </p>
        <GoogleSigninButton/>
        <GithubSigninButton/>
      </div>
    </div>
  )
}

export default Login