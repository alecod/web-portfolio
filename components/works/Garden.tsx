import React from 'react'
import {motion} from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Garden = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.1}} 
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Junior Front End Developer <span className="text-textGreen">@ChromaGarden</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Jan 2020 - Dez 2020</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Development of hotsites using HTML, CSS, Javascript, Jquery, and Bootstrap.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>
                Participation in code reviews for learning and improving code quality.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Use of kanban for task management.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Development of 360 platforms, similar to Google Street View, using Pano2VR software
            </li> 
        </ul>
    </motion.div>
  )
}

export default Garden