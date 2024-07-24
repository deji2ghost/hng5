'use client'
import Button from "@/components/Button"
import Header from "@/components/Header"
import InputForm from "@/components/InputForm"
import Image from "next/image"
import { useState } from "react"


const ProfileDetails = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
  return (
    <div className=" bg-lightAsh flex flex-col gap-5">
        <Header>
            <div className="bg-White p-4 flex flex-col">
                <div className="flex flex-col gap-[40px] p-[24px] border-b border-Borders">
                    <div className="p-5 bg-lightGrey w-full">
                        <h1>Profile Picture</h1>
                        <div><Image alt="" src='' /></div>
                        <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
                    </div>
                    <div className="p-5 bg-lightGrey w-full">
                        <InputForm label="First name" placeholder="" value={firstName} setValue={setFirstName} />
                        <InputForm label="Last name" placeholder="" value={lastName} setValue={setLastName} />
                        <InputForm label="Email" placeholder="" value={email} setValue={setEmail} />
                    </div>
                </div>
                <div className="p-4 w-[100%]">
                    <Button save>
                        Save
                    </Button>
                </div>
            </div>
        </Header>
    </div>
  )
}

export default ProfileDetails