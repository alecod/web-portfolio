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
                At Vagas, I worked on a stage of migrating a legacy .NET monolith project to a new UI with React. This was a very challenging project because all the APIs of this application remained in the monolith, and as Front-End developers, we had to handle a lot of data processing and conversions. The project itself is a recruitment and selection platform from the business owner's perspective.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>
                Integration with the .NET backend, creating complex filters (such as age, location, tags, profession, and more than 50 filters) to improve candidate search, using Context API to manage states efficiently.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                Development of microsites and landing pages focused on marketing campaigns.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                We used Scrum as an agile practice in the work environment.
            </li>
           
          
        </ul>
    </motion.div>
  )
}

export default Vagas