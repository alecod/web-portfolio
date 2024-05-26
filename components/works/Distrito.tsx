import React from 'react'
import {motion} from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Distrito = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.1}} 
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Mid-Level Front End Developer <span className="text-textGreen">@Distrito</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Fev 2022 - Out 2022</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Developed web applications using React, Typescript, and Next.js.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>
                Actively collaborated in implementing new features and fixing bugs, ensuring stability and performance of applications.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Integrated APIs to facilitate efficient communication between developed applications and the company's internal systems.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Created hotsites and landing pages for specific campaigns, using best design and development practices to attract and engage users.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Integrated with email marketing platforms to automate and optimize communication and marketing campaigns, ensuring an effective and personalized approach.
            </li>
            
        </ul>
    </motion.div>
  )
}

export default Distrito