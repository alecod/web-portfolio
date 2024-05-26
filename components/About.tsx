import React from "react"
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai"
import Image from "next/image"
import { profileImg } from "@/public/assets"

const About = () => {


  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About" titleNo="01." />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>Mid-Level Front End Developer with 5 years of experience, specializing in Javascript, Typescript,
            React, and Next.js. Currently enhancing my skills towards Full Stack development with Node.js,
            exploring Fastify and Express frameworks. Engaged in practical projects and self-study to solidify my
            knowledge in these technologies. Additionally, focusing on improving my understanding of unit and
            integration testing using Jest and studying Design Patterns principles, particularly Data-Driven Design.
            
          </p>
          <p>I possess market insights, understanding competitors and trends, enabling me to contribute
            significantly to business success. I am communicative, collaborative, and committed to delivering
            high-quality projects that meet business needs.</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6">
            <li className="flex items-center gap-1">
              <span className="text-textGreen"><AiFillThunderbolt /></span>Javascript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>React.js
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
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>Fastify
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>Express
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>Prisma
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>Postgres
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>SQLite
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>Context API
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>Redux
            </li> <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>Jest
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image src={profileImg} alt="Profile img" className="rounded-lg h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About