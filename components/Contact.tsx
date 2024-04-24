import Link from "next/link"
import React from "react"

export const Contact = () => {
  return (
    <section id="contact"
    className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
        <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">04. Let's connect?</p>
        <h2 className="font-titleFont text-5xl font-semibold">Contact</h2>
    
        <Link href="https://wa.me/5541999174948?text=Ol%C3%A1%2C+estou+entrando+em+contato+para+saber+mais+sobre+seu+trabalho+como+Front+End" target="_blank">
            <button
              className="w-40 h-14 rounded-md text-textGreen text-[]13px] border border-textGreen hover:bg-hoverColor duration-300"
            >Whatsapp</button>
        </Link>
    </section>
  )
}
