import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import {motion} from 'framer-motion'

const Archive = () => {
    const [showMore, setShowMore] = useState(false)

    return (
        <section className="max-w-contentContainer mx-auto px-4 py-24">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-3xl font-titleFont font-semibold">Other Projects</h2>
                <p className="text-sm font-titleFont text-textGreen">View the archive</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
                <ArchiveCard link="/" title="Educate English Learning Academy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas officia fuga quis voluptatem placeat blanditiis modi nostrum sint, velit dicta praesentium accusamus qui et veniam? In reprehenderit rerum perspiciatis." listItem={['Reactjs', 'Tailwind', 'NextJs']} />
                <ArchiveCard link="/" title="Educate English Learning Academy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas officia fuga quis voluptatem placeat blanditiis modi nostrum sint, velit dicta praesentium accusamus qui et veniam? In reprehenderit rerum perspiciatis." listItem={['Reactjs', 'Tailwind', 'NextJs']} />
                <ArchiveCard link="/" title="Educate English Learning Academy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas officia fuga quis voluptatem placeat blanditiis modi nostrum sint, velit dicta praesentium accusamus qui et veniam? In reprehenderit rerum perspiciatis." listItem={['Reactjs', 'Tailwind', 'NextJs']} />
                <ArchiveCard link="/" title="Educate English Learning Academy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas officia fuga quis voluptatem placeat blanditiis modi nostrum sint, velit dicta praesentium accusamus qui et veniam? In reprehenderit rerum perspiciatis." listItem={['Reactjs', 'Tailwind', 'NextJs']} />
                <ArchiveCard link="/" title="Educate English Learning Academy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas officia fuga quis voluptatem placeat blanditiis modi nostrum sint, velit dicta praesentium accusamus qui et veniam? In reprehenderit rerum perspiciatis." listItem={['Reactjs', 'Tailwind', 'NextJs']} />
                <ArchiveCard link="/" title="Educate English Learning Academy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas officia fuga quis voluptatem placeat blanditiis modi nostrum sint, velit dicta praesentium accusamus qui et veniam? In reprehenderit rerum perspiciatis." listItem={['Reactjs', 'Tailwind', 'NextJs']} />

                {showMore && (
                  <>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    >
                    <ArchiveCard link="/" title="Educate English Learning Academy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas officia fuga quis voluptatem placeat blanditiis modi nostrum sint, velit dicta praesentium accusamus qui et veniam? In reprehenderit rerum perspiciatis." listItem={['Reactjs', 'Tailwind', 'NextJs']} />
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    >
                    <ArchiveCard link="/" title="Educate English Learning Academy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas officia fuga quis voluptatem placeat blanditiis modi nostrum sint, velit dicta praesentium accusamus qui et veniam? In reprehenderit rerum perspiciatis." listItem={['Reactjs', 'Tailwind', 'NextJs']} />
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    >
                    <ArchiveCard link="/" title="Educate English Learning Academy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas officia fuga quis voluptatem placeat blanditiis modi nostrum sint, velit dicta praesentium accusamus qui et veniam? In reprehenderit rerum perspiciatis." listItem={['Reactjs', 'Tailwind', 'NextJs']} />
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    >
                    <ArchiveCard link="/" title="Educate English Learning Academy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas officia fuga quis voluptatem placeat blanditiis modi nostrum sint, velit dicta praesentium accusamus qui et veniam? In reprehenderit rerum perspiciatis." listItem={['Reactjs', 'Tailwind', 'NextJs']} />
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    >
                    <ArchiveCard link="/" title="Educate English Learning Academy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas officia fuga quis voluptatem placeat blanditiis modi nostrum sint, velit dicta praesentium accusamus qui et veniam? In reprehenderit rerum perspiciatis." listItem={['Reactjs', 'Tailwind', 'NextJs']} />
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    >
                    <ArchiveCard link="/" title="Educate English Learning Academy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas officia fuga quis voluptatem placeat blanditiis modi nostrum sint, velit dicta praesentium accusamus qui et veniam? In reprehenderit rerum perspiciatis." listItem={['Reactjs', 'Tailwind', 'NextJs']} />
                    </motion.div>
                  </>
                )}

            </div>
            <div className="mt-12 flex items-center justify-center">
             { showMore ? (
            
                   <button
                    onClick={() => setShowMore(false)}
                    className='w-36 h-12 rounded-md text-textGreen text-[]13px] border border-textGreen hover:bg-hoverColor duration-300'>Show Less</button>
              
             ) : (
           
                   <button
                    onClick={() => setShowMore(false)}
                    className='w-36 h-12 rounded-md text-textGreen text-[]13px] border border-textGreen hover:bg-hoverColor duration-300'>Show More</button>
            
             )}
            </div>
        </section>
    )
}

export default Archive