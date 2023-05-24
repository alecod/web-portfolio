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
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Full Front End Developer <span className="text-textGreen">@Vagas</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Jan 2023 - Abr 2023</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Development and maintenance of web and mobile applications using React, Next, TypeScript, and React Native.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>
                Collaboration with design and back-end teams to create responsive and interactive user interfaces.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Integration with RESTful APIs to fetch data and interact with external systems.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Participation in planning meetings and code reviews to ensure deadlines are met and code quality is maintained.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Use of atomic design concepts and eslint/prettier configurations.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Development using Context API, Redux, Fetch API, SWR, React Router DOM, Design System, and React Intl
            </li>
        </ul>
    </motion.div>
  )
}

export default Vagas