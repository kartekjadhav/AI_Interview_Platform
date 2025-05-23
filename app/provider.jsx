'use client';

import React, { useContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'
import { userDetailContext } from '../context/userDetailContext';


const Provider = ({children}) => {
    
    const [user, setUser] = useState()

    useEffect(() => {
        createUser()
    }, [])

    const createUser = async () => {
        //Get user
        const { data: { user } } = await supabase.auth.getUser()

        //Check if user already exits
        let { data: users, error: fetchError } = await supabase
            .from("Users")
            .select("*")
            .eq('email', user?.email)

        console.log("Users - ", users);
        
        console.log("user - ", user);
        

        //If not exist then create a user
        if (users?.length === 0){
            const { data, error: insertedError } = await supabase
                .from('Users')
                .insert([
                {
                    "name": user?.user_metadata?.name,
                    "email": user?.email,
                    "credits": 3,
                    "picture": user?.user_metadata?.avatar_url
                }])
            
            if (insertedError){
                console.log(insertedError);
            }
            setUser(data)
            return
        }

        setUser(users[0])

    }
    
  
    return (
    <userDetailContext.Provider value={{user, setUser}} >
        {children}
    </userDetailContext.Provider>
  )
}

export default Provider

export const useUser = () => {
    return useContext(userDetailContext) 
}