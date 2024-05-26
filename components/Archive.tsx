import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from 'framer-motion'

const Archive = () => {
    const [showMore, setShowMore] = useState(false)

    return (
        <section className="max-w-contentContainer mx-auto px-4 py-24">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-3xl font-titleFont font-semibold">Other Projects</h2>
                <p className="text-sm font-titleFont text-textGreen">View the archive</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
                <ArchiveCard link="https://github.com/alecod/frontend-pass-in" title="Front End Pass In" des="This project has an admin panel for managing users registered for an event. With check-in and validation of one user per event (single credential)." listItem={['Reactjs', 'Typescript', 'Tailwind']} />
                <ArchiveCard link="https://github.com/alecod/backend-pass-in" title="Backend Pass In" des="pass.in is an application for managing participants in in-person events. The API tool allows the organizer to register an event and open a public registration page. Registered participants can issue a credential for check-in on the day of the event. The system will scan the participant's credentials to allow entry to the event." listItem={['Reactjs', 'Typescript', 'Tailwind']} />
                <ArchiveCard link="https://github.com/alecod/feedget" title="Feedget" des="This is a project that creates an evaluation component to apply to other applications" listItem={['Reactjs', 'Tailwind', 'Typescript']} />
                <ArchiveCard link="https://github.com/alecod/moveit" title="Moveit" des="This project was created to create a routine of Pomodoro-style challenges to increase focus during studies. It has level logic, as well as the use of date and time functions" listItem={['Reactjs', 'Context API', 'CSS Modules']} />
                <ArchiveCard link="https://github.com/alecod/podcastr" title="Podcastr" des="In this project, an application interface for podcasts is created. It has play, pause, next components, in addition to using an API to bring data to the application" listItem={['Next', 'Context API', 'Axios']} />
                <ArchiveCard link="https://github.com/alecod/aluraorkut" title="Orkut Interface" des="In this project, it replicates the Orkut interface, very popular here in Brazil between the years 2000 and 2010. For the application data, I used the Github API itself." listItem={['Reactjs', 'Javascript', 'Styled-components']} />





            </div>

        </section>
    )
}

export default Archive