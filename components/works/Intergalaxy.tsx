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
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Junior Front End Developer <span className="text-textGreen">@Intergalaxy</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Jan 2021 - Jan 2022</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Developed websites and platforms using PHP/Laravel, focusing on implementing the presentation and user interaction layer.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>
                Front-end programming using blades, styles (CSS), and Javascript to create responsive and dynamic interfaces.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Used Monday for task management, ensuring effective and organized collaboration with the team.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Besides developing websites, I was also responsible for creating hotsites, landing pages, and improving client-side performance, implementing optimizations to enhance speed and efficiency of applications.

            </li>
         
            
        </ul>
    </motion.div>
  )
}

export default Distrito