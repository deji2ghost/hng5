import Image from "next/image"

import prof from '../../public/images/ph_link-bold.svg'
import group from '../../public/images/Group 251.svg'
import profile from '../../public/images/ph_user-circle-bold.png'
import publish from '../../public/images/publish.svg'
import { ReactNode } from "react"
import Link from "next/link"

interface child{
    children: ReactNode
}

const Header = ({children}: child) => {
  return (
    <div className=" bg-lightGrey md:p-6 md:flex md:flex-col md:gap-4">
        <div className="flex bg-White p-4 justify-between md:hidden">
            <Link href='/linkSharingPage'><Image alt="img" width={30} height={30} src={group}/></Link>
            <Link href='/linkSharingPage'><Image alt="img" width={30} height={30} src={prof}/></Link>
            <Link href='/profileDetails'><Image alt="img" width={30} height={30} src={profile}/></Link>
            <Link href=''><Image alt="img" width={40} height={30} src={publish}/></Link>
        </div>
        <div className="hidden md:flex bg-White p-4 justify-between">
            <Link href='/linkSharingPage'><Image alt="img" width={30} height={30} src={prof}/></Link>
            <Link href='/linkSharingPage' className="flex items-center gap-2"><Image alt="img" width={30} height={30} src={prof}/><span>Links</span></Link>
            <Link href='/profileDetails' className="flex items-center gap-2"><Image alt="img" width={30} height={30} src={prof}/><span>Profile Details</span></Link>
            <Link href=''>Preview</Link>
        </div>
        <div className="p-4 md:p-0">{children}</div>
    </div>
  )
}

export default Header