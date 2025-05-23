'use client';

import React from 'react'
import { supabase } from '../services/supabaseClient'
import { Button } from './ui/button'

const GoogleSigninButton = () => {
    async function signInWithGoogle() {
        const error = await supabase.auth.signInWithOAuth({
          provider: 'google'
        })
    
        if (error) {
          console.log("Error while login with  Google - ", error);
        }
    
      }

    return (
        <Button className='mt-3 w-full' onClick={signInWithGoogle} >
            Signup with Google
        </Button>
    )
}

export default GoogleSigninButton