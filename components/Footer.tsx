import React from "react"
import { TbBrandGithub } from "react-icons/tb"
import { SlSocialYoutube, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl"
import Link from "next/link"



const Footer = () => {
  return (
    <div className="hidden xs:inline-flex mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
        <Link href="/">
            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <TbBrandGithub />
            </span>
        </Link>
        <Link href="/">
            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialYoutube />
            </span>
        </Link>
        <Link href="/">
            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialLinkedin />
            </span>
        </Link>
        <Link href="/">
            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialInstagram />
            </span>
        </Link>
       
    </div>
  )
}

export default Footer