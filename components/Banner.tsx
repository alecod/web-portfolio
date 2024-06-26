import { motion } from 'framer-motion'
import Link from 'next/link'

const Banner = () => {


    return (
        <section id="home"
            className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
        >
            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg- font-titleFont tracking-wide text-textGreen">Hi, my name is</motion.h3>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
            >Alessandro Junqueira <span className="text-textDark mt-2 lgl:mt-4">I build things for the web and mobile.</span></motion.h1>
            <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-base md:max-w-[650px] text-textDark font-medium">
                 Im a front-end developer with experience in technologies like Javascript, React, Next, TypeScript. I have extensive experience in creating responsive and interactiveuser interfaces, as well as implementing business logic in web applications.
                <br />
             
            </motion.p>

        </section>
    )
}

export default Banner