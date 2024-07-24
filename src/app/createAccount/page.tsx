"use client"

import Button from '@/components/Button'
import FormFooter from '@/components/FormFooter'
import FormHeader from '@/components/FormHeader'
import FormLogo from '@/components/FormLogo'
import InputForm from '@/components/InputForm'
import React, { useState } from 'react'
import { auth } from '../firebase/config'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'

const CreateAccount = () => {
    const [ email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    const handleSignUp = async (e: any) => {
        e.preventDefault()

        console.log('signup')
        try{
            const res = await createUserWithEmailAndPassword(email, password)
            console.log({res})
            console.log(email, password)
            setEmail('')
            setPassword('')
        } catch (e){
            console.error(e)
        }
    }
  return (
    <div className="flex flex-col gap-[64px] p-[32px] md:py-[226px] md:px-[146px] lg:py-[206px] lg:px-[182px] bg-lightGrey">
        <FormLogo />
        <div className="flex flex-col gap-[40px] md:p-[40px] md:bg-White md:rounded-[8px] ">
            <FormHeader header='Create account' paragraph='Let’s get you started sharing your links!'/>
            <form onSubmit={handleSignUp} className="flex flex-col gap-[24px]">
                <InputForm label='Email address' placeholder='e.g. alex@email.com' value={email} setValue={setEmail}/>
                <InputForm label='Create password' placeholder='At least .8 characters' value={password} setValue={setPassword}/>
                {/* <InputForm label='Confirm password' placeholder='At least .8 characters'/> */}
                <Button>
                    Create new account
                </Button>
                <FormFooter title='Already have an account?' paragraph="Login"/>
            </form>
        </div>
    </div>
  )
}

export default CreateAccount
