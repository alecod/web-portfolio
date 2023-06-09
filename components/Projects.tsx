import SectionTitle from "./SectionTitle"
import Image from "next/image"
import { amazonImg, cyberImg } from "@/public/assets"
import { AiOutlineYoutube } from "react-icons/ai"
import { TbBrandGithub } from "react-icons/tb"
import { RxOpenInNewWindow } from "react-icons/rx"
import Link from "next/link"


const Projects = () => {
  return (
    <section
    id="project" className="max-w-container mx-auto lgl:px-20 py-24"
    >
        <SectionTitle title="Some Things I have Built" titleNo="03." />
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
           <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
           <div className="flex flex-col xl:flex-row gap-6">
                <Link href="/" className="w-full xl:w-1/2 h-auto relative group" target="_blank">
                <div>
                    <Image className="w-full h-full object-contain" src={amazonImg} alt="Amazon Img"/>
                </div>
                </Link>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
                <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
                <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">An Amazon clone website for visualizing personalized Amazon Website. View your products, Add your account with{" "}<span className="text-textGreen">O-auth</span> and then make the purchage using <span className="text-textGreen">Stripe</span></p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap=2 md:gap-5 justify-between text-textDark">
                    <li>Nextjs</li>
                    <li>Typescript</li>
                    <li>Next-auth</li>
                    <li>Stripe</li>
                    <li>Vercel</li>
                </ul>
                <div className="text-2xl flex gap-4">
                    <Link href="/" className="hover:text-textGreen duration-300">
                        <TbBrandGithub />
                    </Link>
                    <Link href="/" className="hover:text-textGreen duration-300">
                        <AiOutlineYoutube />
                    </Link>
                    <Link href="/" className="hover:text-textGreen duration-300">
                        <RxOpenInNewWindow />
                    </Link>
                </div>
            </div>
            </div>
            <div className="flex flex-col xl:flex-row-reverse gap-6">
                <Link href="/" className="w-full xl:w-1/2 h-auto relative group" target="_blank">
                <div>
                    <Image className="w-full h-full object-contain" src={cyberImg} alt="Amazon Img"/>
                </div>
                </Link>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
                <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
                <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16">An Amazon clone website for visualizing personalized Amazon Website. View your products, Add your account with{" "}<span className="text-textGreen">O-auth</span> and then make the purchage using <span className="text-textGreen">Stripe</span></p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap=2 md:gap-5 justify-between text-textDark">
                    <li>Nextjs</li>
                    <li>Typescript</li>
                    <li>Next-auth</li>
                    <li>Stripe</li>
                    <li>Vercel</li>
                </ul>
                <div className="text-2xl flex gap-4">
                    <Link href="/" className="hover:text-textGreen duration-300">
                        <TbBrandGithub />
                    </Link>
                    <Link href="/" className="hover:text-textGreen duration-300">
                        <AiOutlineYoutube />
                    </Link>
                    <Link href="/" className="hover:text-textGreen duration-300">
                        <RxOpenInNewWindow />
                    </Link>
                </div>
            </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Projects