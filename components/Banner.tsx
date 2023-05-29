import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const Banner = () => {

    const { t: translate } = useTranslation()

    return (
        <section id="home"
            className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
        >
            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg- font-titleFont tracking-wide text-textGreen">{translate('text1')}</motion.h3>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
            >{translate('text2')} <span className="text-textDark mt-2 lgl:mt-4">{translate('text3')}</span></motion.h1>
            <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-base md:max-w-[650px] text-textDark font-medium">
                {translate('text4')}
                <br />
                <Link href="/">
                    <span className="text-textGreen inline-flex realtive cursor-pointer h-7 overflow-x-hidden group">{translate('text5')}</span>
                </Link>
            </motion.p>
            <motion.button 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">{translate('text6')}</motion.button>
        </section>
    )
}

export default Banner