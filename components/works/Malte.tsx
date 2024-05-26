import React from 'react'
import {motion} from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Malte = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.1}} 
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Web Designer <span className="text-textGreen">@ClubedoMalte</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Mai 2018 - Nov 2019</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Developed pages and hotsites for e-commerce using HTML, CSS, Javascript, jQuery, and Bootstrap.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>
                Participated in UI/UX meetings to create more effective sales pages using insights and data from Hotjar.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Configured Google Tag Manager scripts.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Integrated with email marketing platforms.
            </li> 
        </ul>
    </motion.div>
  )
}

export default Malte