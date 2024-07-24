"use client"
import InputForm from "@/components/InputForm"
import FormHeader from "@/components/FormHeader"
import FormFooter from "@/components/FormFooter"
import FormLogo from "@/components/FormLogo"
import { useState } from "react"
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth } from "./firebase/config"
import Button from "@/components/Button"
import { useRouter } from "next/navigation"


const Home = () => {
  const [ email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [SignInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
  const router = useRouter()

  const handleSignIn = async (e: any) => {
    e.preventDefault()
    console.log('signin')
    try{
        const res = await SignInWithEmailAndPassword(email, password)
        console.log({res})
        router.push('/linkSharingPage')
        console.log(email, password)
        setEmail('')
        setPassword('')
        // if(res){
        // }
    } catch (e){
        console.error(e)
    }
}

  return (
    <div className="flex flex-col gap-[64px] p-[32px] md:py-[226px] md:px-[146px] lg:py-[206px] lg:px-[182px] bg-lightGrey">
      <FormLogo />
      <div className="flex flex-col gap-[40px] md:p-[40px] md:bg-White md:rounded-[8px]">
        <FormHeader header="Login" paragraph="Add your details below to get back into the app"/>
        <form onSubmit={handleSignIn} className="flex flex-col gap-[24px]">
          <InputForm label='Email address' placeholder='e.g. alex@email.com' value={email} setValue={setEmail} />
          <InputForm label='Password' placeholder='Enter your password' value={password} setValue={setPassword}/>
          <Button>
            Login
          </Button>
          <FormFooter title='Dont have an account?' paragraph="Create an account"/>
        </form>
      </div>
    </div>
  )
}

export default Home
