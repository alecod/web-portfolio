import { motion } from 'framer-motion'

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
            >Alessandro Junqueira. <span className="text-textDark mt-2 lgl:mt-4">I build things for the web and mobile.</span></motion.h1>
            <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-base md:max-w-[650px] text-textDark font-medium">
                I'm a front-end developer with experience in technologies like React, Next, TypeScript and React Native. I have extensive experience in creating responsive and interactiveuser interfaces, as well as implementing business logic in web and mobile applications.
                <br />
                <a href="/">
                    <span className="text-textGreen inline-flex realtive cursor-pointer h-7 overflow-x-hidden group">Learn More
                        {/* <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span> */}
                    </span>
                </a>
            </motion.p>
            <motion.button 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">Check out my Project!</motion.button>
        </section>
    )
}

export default Banner