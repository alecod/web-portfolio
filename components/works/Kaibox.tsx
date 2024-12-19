import React from 'react'
import {motion} from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Kaibox = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.1}} 
    className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">Mid-Level Front End Developer <span className="text-textGreen">@Kaibox</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Apr 2024 - Otc 2024</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                At Kai Box, I developed from scratch a sales and campaign management platform using Next.js,
 TypeScript, and Tailwind. Integrated APIs (Stripe, Shopify, Facebook Ads, and Plausible) to optimize
 data tracking, sales management, and campaigns.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /></span>
                Development using Next.js, TypeScript, Tailwind, Zod, React Hook Form, React Query, Shadcn, and Zustand.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
               Setup pipeline configuration with Github Actions, tag versioning, Docker image configuration, and versioning with Gitflow..
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><TiArrowForward /> </span>
                I integrated various APIs to optimize the platform's functionality, including Plausible for data tracking, similar to Google Analytics. I also integrated the Stripe payment API for subscription management, the Shopify API for product listing, orders, and billing, and the Facebook Ads API for monitoring BMs, ad accounts, and campaigns, improving the quality of ads by sending events to the Pixel and Conversion API.
            </li>
           
            
        </ul>
    </motion.div>
  )
}

export default Kaibox