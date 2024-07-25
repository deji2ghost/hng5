'use client'
import Button from "@/components/Button"
import FormHeader from "@/components/FormHeader"
import Header from "@/components/Header"
import Image from "next/image"
import phone from '../../../public/images/mobile-preview.svg'
import Group from '../../../public/images/Group 273.svg'
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faList } from "@fortawesome/free-solid-svg-icons"

interface dataProps{
    id: number,
    link: string,
    path: string
}
const LinkSharingPage = () => {

    const [ data, setData ] = useState<dataProps[]>([])
    const clicked = (e) => {
        e.preventDefault()
        const newId = data.length + 1;
        console.log('clicked add new')
        console.log(data)
        setData([...data, {id: newId, link: 'Github', path: ''}])
    }

    const handleDelete = (i: any) => {
        const deleteVal = [...data]
        deleteVal.splice(i,1)
        setData(deleteVal)
    }


    const options = [
        {label: 'Github', value: 'Github'},
        {label: 'Youtube', value: 'Youtube'},
        {label: 'Twitter', value: 'Twitter'}
    ]

   
  return (
    <Header>
        <div className="lg:flex lg:items-start lg:justify-center lg:w-full lg:gap-6">
            <div className="hidden bg-White lg:flex lg:justify-center lg:w-[560px] lg:mx-auto">
                <Image src={phone} alt="picture of phone" />
            </div>
            <form className="bg-White flex flex-col px-4 md:px-6 lg:w-[808px] lg:mx-auto">
                <div className="flex flex-col gap-[40px] p-[24px] border-b border-Borders">
                    <FormHeader header="Customize your links" paragraph="Add/edit/remove links below and then share all your profiles with the world!"/>
                    <div className="flex flex-col gap-6">
                        <Button handleClick={clicked} newLink>
                            + Add new link
                        </Button>
                        { data.length < 1 ? <div className="p-5 bg-lightGrey flex flex-col md:gap-10">
                            <div className="mx-auto"><Image width={124.766} height={80} alt='' src={Group}/></div>
                            <h1 className="text-DarkGrey text-center text-[24px] font-[700] leading-[36px]">Let’s get you started</h1>
                            <p className="text-Grey text-center text-[16px] font-[400]">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                        </div> :

                        data.map((item, index) => {
                            return(
                                <div key={index} className="p-5 bg-lightGrey">
                                    <div className="flex items-center justify-between text-Grey text-[16px]">
                                        <p className="font-[700] ">Link#{index + 1}</p>
                                        <p className="font-[400]" onClick={(e) => handleDelete(index)}>Remove</p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <label className="font-[400] text-[12px]">Platform</label>
                                        <select className="select py-3 px-4 border border-Borders rounded-[8px] outline-none focus:hover:outline-none bg-White">
                                            {
                                                options.map(option => 
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <label>Link</label>
                                        <input type="text" placeholder="Enter link here" className="py-3 px-4 rounded-[8px] border outline-none border-Borders" />
                                    </div>
                                </div>
                            )
                        }) 
                       }
                    </div>
                </div> 
                <div className="p-4 w-[100%]">
                    <Button save>
                        Save
                    </Button>
                </div>
            </form>
        </div>
    </Header>
  )
}

export default LinkSharingPage