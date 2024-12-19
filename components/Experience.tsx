import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Vagas from './works/Vagas'
import Distrito from './works/Distrito'
import Intergalaxy from './works/Intergalaxy'
import Garden from './works/Garden'
import Malte from './works/Malte'
import Kaibox from './works/Kaibox'

const Experience = () => {

    const [workVagas, setWorkVagas] = useState(true)
    const [workDistrito, setWorkDistrito] = useState(false)
    const [workIntergalaxy, setWorkIntergalaxy] = useState(false)
    const [workGarden, setWorkGarden] = useState(false)
    const [workMalte, setWorkMalte] = useState(false)
    const [workKaibox, setWorkKaibox] = useState(false)

    const handleVagas = () => {
        setWorkVagas(true)
        setWorkDistrito(false)
        setWorkIntergalaxy(false)
        setWorkGarden(false)
        setWorkMalte(false)
        setWorkKaibox(false)
    }

    const handleDistrito = () => {
        setWorkVagas(false)
        setWorkDistrito(true)
        setWorkIntergalaxy(false)
        setWorkGarden(false)
        setWorkMalte(false)
        setWorkKaibox(false)
    }

    const handleIntergalxy = () => {
        setWorkVagas(false)
        setWorkDistrito(false)
        setWorkIntergalaxy(true)
        setWorkGarden(false)
        setWorkMalte(false)
        setWorkKaibox(false)
    }



    const handleGarden = () => {
        setWorkVagas(false)
        setWorkDistrito(false)
        setWorkIntergalaxy(false)
        setWorkGarden(true)
        setWorkMalte(false)
        setWorkKaibox(false)
    }


    const handleMalte = () => {
        setWorkVagas(false)
        setWorkDistrito(false)
        setWorkIntergalaxy(false)
        setWorkGarden(false)
        setWorkMalte(true)
        setWorkKaibox(false)
    }

    const hadleKaibox = () => {
        setWorkVagas(false)
        setWorkDistrito(false)
        setWorkIntergalaxy(false)
        setWorkGarden(false)
        setWorkMalte(false)
        setWorkKaibox(true)
    }


    return (
        <section
            id="experience"
            className="max-w-containerXs mx-auto py-10 lgl:py-24 px-4"
        >
            <SectionTitle title='Where I have worked' titleNo='02.' />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col">
                <li
                        onClick={hadleKaibox}
                        className={`${workKaibox ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium border-l-2`}>
                        Kai Box
                    </li>
                    <li
                        onClick={handleVagas}
                        className={`${workVagas ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium border-l-2`}>
                        Vagas
                    </li>
                    <li
                        onClick={handleDistrito}
                        className={`${workDistrito ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium border-l-2`}>
                        Distrito
                    </li>
                    <li
                        onClick={handleIntergalxy}
                        className={`${workIntergalaxy ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium border-l-2`}>
                        Intergalaxy
                    </li>
                    <li
                        onClick={handleGarden}
                        className={`${workGarden ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium border-l-2`}>
                        Chroma Garden
                    </li>
                    <li
                        onClick={handleMalte}
                        className={`${workMalte ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium border-l-2`}>
                        Clube do Malte
                    </li>
                </ul>
                {workVagas && <Vagas />}
                {workDistrito && <Distrito />}
                {workIntergalaxy && <Intergalaxy />}
                {workGarden && <Garden />}
                {workMalte && <Malte />}
                {workKaibox && <Kaibox />}
            </div>
        </section>
    )
}

export default Experience