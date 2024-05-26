import React from 'react'
import {motion} from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Vagas = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.1}} 
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Mid-Level Front End Developer <span className="text-textGreen">@Vagas</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Jan 2023 - Abr 2023</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Developed and maintained web applications with React, Next.js, and Typescript, enhancing performance and building components and functionalities.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>
                Collaborated with design and back-end teams to create responsive and interactive interfaces.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Utilized Atomic Design concepts.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Integrated APIs, ensuring efficient communication with internal and external systems.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Participated in planning and code reviews, ensuring quality and timely deliveries, and Scrum ceremonies, promoting agile practices.
            </li>
          
        </ul>
    </motion.div>
  )
}

export default Vagas