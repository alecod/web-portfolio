import React from "react"
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai"
import Image from "next/image"
import { profileImg } from "@/public/assets"
import { useTranslation } from 'next-i18next'

const About = () => {

  const { t: translate } = useTranslation()

  return (
    <section
    id="about"
    className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
        <SectionTitle title={translate('text7')} titleNo="01."/>
        <div className="flex flex-col lgl:flex-row gap-16">
          <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
            <p>The challenge is in my vein and every project Im involved in always looking for ideas and visions to aggregate and bring results. Web development is one of my passions. Today I can </p>
            <p>In these years as a developer I have already dealt with several types of development scenarios, from PHP projects, Laravel, e-commerce, .NET, Wordpress, React, Next, React Native among other scenarios.
            Today my focus is to continue evolving as a developer to become a Software Engineer, understand project architecture (Solid among others) and continue on the path of evolution in Javascript, Next and Typescript</p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><AiFillThunderbolt /></span>Javascript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><AiFillThunderbolt /></span>Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><AiFillThunderbolt /></span>React.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><AiFillThunderbolt /></span>Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><AiFillThunderbolt /></span>Typescript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><AiFillThunderbolt /></span>Tailwind
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen"><AiFillThunderbolt /></span>Styled Components
              </li>
            </ul>
          </div>
          <div className="w-full lgl:w-1/3 h-80 relative group">
            <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
              <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                <Image src={profileImg} alt="Profile img" className="rounded-lg h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About