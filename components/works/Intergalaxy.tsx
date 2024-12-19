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
                Development of websites and platforms using PHP/Laravel, focusing on implementing the presentation layer and user interaction.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>
                Frontend programming using blades, HTML, CSS, Bootstrap, jQuery, and JavaScript.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Configuration and optimization for SEO.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                hotsites and landing pages for marketing campaigns.
            </li>
         
            
        </ul>
    </motion.div>
  )
}

export default Distrito