'use client';

import React from 'react'
import { Button } from './ui/button'
import { supabase } from '../services/supabaseClient';

const GithubSigninButton = () => {
    function signInWithGithub() {
        const {data, error} = supabase.auth.signInWithOAuth({
            provider: "github"
        })
        
        if (error){
            console.log("Error while logging with Github - ", error);
        }

    } 
  
    return (
    <Button  className='mt-3 w-full' onClick={signInWithGithub}>
        Login with Github
    </Button>
  )
}

export default GithubSigninButton