import React from 'react'
import Button from './button'

function Speakers() {
  return (
    <div className="container flex flex-col max-w-7xl mx-auto pt-10 md:pt-20 z-20">
        <div className="flex flex-col items-center justify-center space-y-5">
            <div className="flex justify-center items-center">
                <Button label='Speakers' className='bg-white py-4 text-lg' />
            </div>
            <div className="my-6">
                <h1 className='text-3xl md:text-4xl font-medium text-center'><strong>Meet Our Speakers</strong></h1>
            </div>
            <div className="text-foreground flex justify-center items-center mx-2">
                <p className='text-center text-lg w-full md:w-3/4'>
                    Join us for an exciting DevFest 2025, spanning across two days, dedicated to diving deep into the world of technology and innovation!
                </p>
            </div>
            <div className="flex flex-row my-4 items-center justify-center gap-4 overflow-x-auto">
                <Button className="bg-accent" label="All Speakers" />
                <Button className="bg-white" label="Main Conference" />
                <Button className="bg-white" label="Workshop" />
            </div>
        </div>
        <div className="scroller relative mb-4 overflow-hidden scroller-thin flex flex-nowrap z-50">
            <ul className="flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4 overflow-x-auto">
                <li className='flex h-[488px] w-[375px] items-center justify-center'>
                    <div className="relative h-full w-full rounded-2xl border-3 border-accent">
                        <div className="h-full w-full">
                            <img src="/gdg-assets/lynette.jpg" className='h-full rounded-xl w-auto object-cover' alt="Speaker image" />
                        </div>
                        <div className="absolute z-10 bottom-1 left-1 flex flex-col rounded-lg bg-accent px-4 py-2 w-3/4">
                            <span className='font-medium'>Lynnette Lynnette</span>
                            <small>GDG Bamenda Lead</small>
                        </div>
                        <div className="absolute z-10 top-1 right-1 rounded-lg text-center text-lg bg-white border-1 font-light border-dashed border-gray-300 py-2 w-1/2">Conference</div>
                    </div>
                </li>
                <li className='flex h-[488px] w-[375px] items-center justify-center'>
                    <div className="relative h-full w-full rounded-2xl border-3 border-chart-4">
                        <div className="h-full w-full">
                            <img src="/gdg-assets/lynette.jpg" className='h-full w-auto object-cover rounded-xl' alt="Speaker image" />
                        </div>
                        <div className="absolute z-10 bottom-1 left-1 flex flex-col rounded-lg bg-chart-4 px-4 py-2 w-3/4">
                            <span className='font-medium'>Lynnette Lynnette</span>
                            <small>GDG Bamenda Lead</small>
                        </div>
                        <div className="absolute z-10 top-1 right-1 rounded-lg text-center text-lg bg-white border-1 font-light border-dashed border-gray-300 py-2 w-1/2">Workshop</div>
                    </div>
                </li>
                <li className='flex h-[488px] w-[375px] items-center justify-center'>
                    <div className="relative h-full w-full rounded-2xl border-3 border-chart-1">
                        <div className="h-full w-full">
                            <img src="/gdg-assets/lynette.jpg" className='h-full w-auto object-cover rounded-xl' alt="Speaker image" />
                        </div>
                        <div className="absolute z-10 bottom-1 left-1 flex flex-col rounded-lg bg-chart-1 px-4 py-2 w-3/4">
                            <span className='font-medium'>Lynnette Lynnette</span>
                            <small>GDG Bamenda Lead</small>
                        </div>
                        <div className="absolute z-10 top-1 right-1 rounded-lg text-center text-lg bg-white border-1 font-light border-dashed border-gray-300 py-2 w-1/2">Conference</div>
                    </div>
                </li>
                <li className='flex h-[488px] w-[375px] items-center justify-center'>
                    <div className="relative h-full w-full rounded-2xl border-3 border-chart-2">
                        <div className="h-full w-full">
                            <img src="/gdg-assets/lynette.jpg" className='h-full w-auto object-cover rounded-xl' alt="Speaker image" />
                        </div>
                        <div className="absolute z-10 bottom-1 left-1 flex flex-col rounded-lg bg-chart-2 px-4 py-2 w-3/4">
                            <span className='font-medium'>Lynnette Lynnette</span>
                            <small>GDG Bamenda Lead</small>
                        </div>
                        <div className="absolute z-10 top-1 right-1 rounded-lg text-center text-lg bg-white border-1 font-light border-dashed border-gray-300 py-2 w-1/2">Conference</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Speakers