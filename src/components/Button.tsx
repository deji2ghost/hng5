'use client'
import { ReactNode } from "react"

interface Name {
  save?: boolean,
  newLink?: boolean,
  children: ReactNode,
  handleClick?:()=>void
}

const Button = ({children, save, newLink, handleClick}: Name) => {
  return (
    <button onClick={handleClick} type="submit" className={save ? `bg-Purple w-full text-White text-center py-[11px] px-[27px] text-[16px] font-[600] leading-[24px] rounded-[8px] border-none outline-none` : newLink ? ` text-Purple w-full bg-White text-center py-[11px] px-[27px] text-[16px] font-[600] leading-[24px] rounded-[8px] border border-Purple outline-none ` : `bg-Purple text-White text-center py-[11px] px-[27px] text-[16px] font-[600] leading-[24px] rounded-[8px] border-none outline-none`}>
      {children}
    </button>
  )
}

export default Button