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
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Junior Front End Developer <span className="text-textGreen">@ClubedoMalte</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Mai 2018 - Nov 2019</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Development of web pages and hotsites using HTML, CSS, Javascript, Jquery, and Bootstrap in the e-commerce platform using Tray Corp.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>
                Participation in UI/UX meetings to create more effective sales pages, using insights and data from Hotjar.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Configuration of GTM scripts.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Integration with email marketing platforms.
            </li> 
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Participated in the development of the Bolão do Malte platform (2018 World Cup), where I was responsible for creating screens for the backend integration
            </li>
        </ul>
    </motion.div>
  )
}

export default Malte