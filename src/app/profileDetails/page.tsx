"use client";
import Button from "@/components/Button";
import FormHeader from "@/components/FormHeader";
import Header from "@/components/Header";
import InputForm from "@/components/InputForm";
import Image from "next/image";
import imgimage from "../../../public/images/Frame 262.png";
import { useEffect, useRef, useState } from "react";
import phone from "../../../public/images/mobile-preview.svg";
import { dataProps } from "../linkSharingPage/page";

const ProfileDetails = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState<dataProps[]>([]);

  useEffect(() => {
    const detailsLink = localStorage.getItem("savedLinks");
    if (detailsLink) {
      const newData = JSON.parse(detailsLink);
      setData(newData);
    }
  }, []);

  const handleImageClick = () => {
    console.log('image')
    if(inputRef.current){
        inputRef.current.click()
    }
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    console.log(file)
    setImage(file)
  }

  useEffect(() => {
    console.log(data);
  });
  return (
    <div className=" bg-lightAsh flex flex-col gap-5">
      <Header>
        <div className="lg:flex lg:items-start lg:justify-center lg:w-full lg:gap-6">
          <div className="hidden relative bg-White lg:block lg:justify-center lg:w-[560px] lg:mx-auto">
           
                  <Image src={phone} alt="picture of phone" className="mx-auto" />
            
            <div className="absolute top-52 left-0 right-0 mx-auto">
              {data?.map((phone) => {
                return (
                  <p
                    key={phone?.id}
                    className="w-[45%] mx-auto top-2 border-red-700 border-b text-center"
                  >
                    {phone?.link}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="bg-White p-4 flex flex-col">
            <div className="flex flex-col gap-[40px] p-[24px] border-b border-Borders">
              <FormHeader
                header="Profile Details"
                paragraph="Add your details to create a personal touch to your profile."
              />
              <div className="p-5 bg-lightGrey w-full flex flex-col gap-5">
                <h1 className="font-[400] text-[16px] text-grey">
                  Profile Picture
                </h1>
                <div onClick={handleImageClick} className="w-[50%] bg-lightPurple">
                    {
                        image ?
                        <Image width={30} height={30} src={URL.createObjectURL(image)} alt="picture of phone" className="mx-auto" /> :
                        <Image alt="" src={imgimage} />
                      
                    }
                  <input className="hidden" type="file" ref={inputRef} onChange={handleImageChange} placeholder="upload file"/>
                </div>
                <p className="font-[400] text-[12px]">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
              </div>
              <div className="p-5 bg-lightGrey w-full">
                <InputForm
                  label="First name"
                  placeholder=""
                  value={firstName}
                  setValue={setFirstName}
                />
                <InputForm
                  label="Last name"
                  placeholder=""
                  value={lastName}
                  setValue={setLastName}
                />
                <InputForm
                  label="Email"
                  placeholder=""
                  value={email}
                  setValue={setEmail}
                />
              </div>
            </div>
            <div className="p-4 w-[100%]">
              <Button save>Save</Button>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default ProfileDetails;
