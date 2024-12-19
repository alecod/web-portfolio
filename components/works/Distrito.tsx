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
                At Distrito, I was responsible for developing the courses feature within the platform, which connects companies and startups with educational content, allowing companies to offer both internal and external courses in a simplified way.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>
                Development of the application using React, TypeScript, and Next.js, focusing on user experience, ensuring smooth and responsive navigation.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Integration with the Getnet payment API to manage financial transactions for courses, as well as developing a permission system for students and teachers.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Implementation of features such as grading system, reviews, and comments to improve interaction and feedback between platform users.
            </li>
        
            
        </ul>
    </motion.div>
  )
}

export default Distrito