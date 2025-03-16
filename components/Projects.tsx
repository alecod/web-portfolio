import SectionTitle from "./SectionTitle"
import Image from "next/image"
import { spotify, booking, wallmart } from "@/public/assets"
import { TbBrandGithub } from "react-icons/tb"
import Link from "next/link"


const Projects = () => {
    return (
        <section
            id="project" className="max-w-container mx-auto lgl:px-20 py-24"
        >
            <SectionTitle title="Some Things I have Built" titleNo="03." />
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
                <div className="flex flex-col xl:flex-row-reverse gap-6">
                        <Link href="https://github.com/alecod/walmart-interface" className="w-full xl:w-1/2 h-auto relative group" target="_blank">
                            <div>
                                <Image className="w-full h-full object-contain" src={wallmart} alt="Amazon Img" />
                            </div>
                        </Link>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
                            <h3 className="text-2xl font-bold">Walmart Interface</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                            Product Search: Find any product easily. Search and Product Page: Browse specific results and details. Shopping Cart: Add and remove products with a simple click. Product Modal: Add or remove items from anywhere in the application. Checkout: Add or remove items before going to the payment screen. Category Page: Explore products by different categories.</p>
                            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap=2 md:gap-5 justify-between text-textDark">
                                <li>Nextjs</li>
                                <li>Typescript</li>
                                <li>Tailwind</li>
                                <li>Cache Validations</li>
                                <li>Web scraper API</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <Link href="https://github.com/alecod/walmart-interface" className="hover:text-textGreen duration-300" target="_blank">
                                    <TbBrandGithub />
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-6">
                        <Link href="https://github.com/alecod/spotify-webplayer" className="w-full xl:w-1/2 h-auto relative group" target="_blank">
                            <div>
                                <Image className="w-full h-full object-contain" src={spotify} alt="Amazon Img" />
                            </div>
                        </Link>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
                            <h3 className="text-2xl font-bold">Spotify Webplayer Interface</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                In this project, the Spotify web interface was recreated using the Spotify API to bring account data and thus play the songs and playlists locally in the project.</p>
                            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap=2 md:gap-5 justify-between text-textDark">
                                <li>Nextjs</li>
                                <li>Javascript</li>
                                <li>Next-auth</li>
                                <li>Tailwind</li>
                                <li>Spotify Web API</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <Link href="https://github.com/alecod/spotify-webplayer" className="hover:text-textGreen duration-300" target="_blank">
                                    <TbBrandGithub />
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row-reverse gap-6">
                        <Link href="https://github.com/alecod/booking-interface" className="w-full xl:w-1/2 h-auto relative group" target="_blank">
                            <div>
                                <Image className="w-full h-full object-contain" src={booking} alt="Amazon Img" />
                            </div>
                        </Link>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
                            <h3 className="text-2xl font-bold">Booking.com Interface</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16">This project was created to replicate the search on the booking.com website. In this project, it allows you to search for hotels, searching by city, date, number of people and rooms. For the search, we used the oxylabs web scraper api to bring data from the booking.com website itself.</p>
                            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap=2 md:gap-5 justify-between text-textDark">
                                <li>Nextjs</li>
                                <li>Typescript</li>
                                <li>Tailwind</li>
                                <li>Oxylabs Web Scraper API</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <Link href="https://github.com/alecod/booking-interface" className="hover:text-textGreen duration-300" target="_blank">
                                    <TbBrandGithub />
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects