import React from 'react'
import Button from './button';
import Image from 'next/image';

function AboutDevfestBamenda() {
  return (
    <section className='container relative my-10 flex flex-col md:flex-row mx-auto justify-between gap-8 items-center px-6 md:p-0'>
        <div className="flex justify-center items-center space-y-8 flex-col flex-grow">
            <Button label='About Devfest Bamenda 2025' className="bg-white py-4" />
            <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-2">
                {/* Left scribble */}
                <img 
                    src="/gdg-assets/scribbles-left.svg" 
                    className="hidden md:block h-[200px] md:h-[250px]" 
                    alt="scribble-left" 
                />
                <img 
                    src="/gdg-assets/scribbles-up.svg" 
                    className="block md:hidden h-[30px] mr-3" 
                    alt="scribble-left" 
                />

                {/* Text block */}
                <div className="text-white text-lg text-left md:text-justify space-y-2 md:space-y-4 w-full md:w-[450px]">
                    <p className="mt-4">Dive into two days of tech and innovation at DevFest 2025.</p>
                    <div className="flex flex-col">
                    <p>
                        <span className="uppercase text-accent">Theme: </span>
                        Building Safe, Secure and Scalable Solutions with AI and Cloud
                    </p>
                    <ul className="list-disc ml-4">
                        <li>
                        Day 1: Get hands-on with Google technologies in an intensive technical
                        workshop led by industry experts.
                        </li>
                        <li>
                        Day 2: Immerse yourself in the DevFest Festival with four engaging talks
                        from tech pioneers, plus stands showcasing Google tech, partners, and
                        vendors. Enjoy exciting games and more!
                        </li>
                    </ul>
                    </div>
                    <p>Connect, learn, and grow with our vibrant community. Don't miss out!</p>
                </div>

                {/* Right scribble */}
                <img 
                    src="/gdg-assets/scribbles-right.svg" 
                    className="hidden md:block h-[200px] md:h-[250px]" 
                    alt="scribble-right" 
                />
                <img 
                    src="/gdg-assets/scribbles-down.svg" 
                    className="block md:hidden h-[30px] mr-3" 
                    alt="scribble-left" 
                />
            </div>
            <Button className="gap-4 px-15 py-4 bg-accent border-none" label="Get Your Ticket" icon="/icons/icon.svg" />
        </div>
        <div className="hidden lg:block flex-grow relative">
            <div className="block w-[68px] h-[68px] rounded-full bg-pastel-yellow absolute top-0 left-0"/>
            <div className="block w-[68px] h-[68px] rounded-full bg-pastel-red absolute bottom-0 right-0"/>
            <div className="flex items-center justify-center gap-8 rotate-12">
                <div className="w-[221px] h-[438px] rounded-xl border-2 border-accent overflow-hidden">
                    <img 
                        src="/images/devfest-2024.png" 
                        className="h-full w-auto object-cover" 
                        alt="devfest bamenda 2024" 
                    />
                </div>
                <div className="w-[221px] h-[438px] rounded-xl border-2 border-accent overflow-hidden">
                    <img 
                        src="/images/devfest-2024.png" 
                        className="h-full w-auto object-cover" 
                        alt="devfest bamenda 2024" 
                    />
                </div>
            </div>
        </div>
        <div className="absolute inset-0 flex lg:hidden items-center justify-center">
            <div className="flex items-center justify-center gap-8 rotate-12 opacity-20 blur-sm">
                <div className="w-[221px] h-[438px] rounded-xl border-2 border-accent overflow-hidden">
                <img 
                    src="/images/devfest-2024.png" 
                    className="h-full w-auto object-cover" 
                    alt="devfest bamenda 2024" 
                />
                </div>
                <div className="w-[221px] h-[438px] rounded-xl border-2 border-accent overflow-hidden">
                <img 
                    src="/images/devfest-2024.png" 
                    className="h-full w-auto object-cover" 
                    alt="devfest bamenda 2024" 
                />
                </div>
            </div>
</div>
    </section>
  )
}

export default AboutDevfestBamenda;