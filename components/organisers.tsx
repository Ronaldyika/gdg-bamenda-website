import React from 'react'
import Button from './button'

function Organisers() {
  return (
    <div className="container flex flex-col max-w-7xl mx-auto pt-10 md:pt-20 z-20">
        <div className="flex flex-col items-center justify-center space-y-5">
            <div className="flex justify-center items-center">
                <Button label='Organizers & Volunteers' className='bg-white py-4 text-lg' />
            </div>
            <div className="my-6">
                <h1 className='text-3xl md:text-4xl font-medium text-center'><strong>The Organizing Team</strong></h1>
            </div>
            <div className="text-foreground flex justify-center items-center mb-5 mx-2">
                <p className='text-center text-lg w-full md:w-3/4'>
                    Meet the dedicated volunteers who are working tirelessly to make DevFest Bamenda 2025 a success. 
                    This passionate team from GDG Bamenda is committed to creating a vibrant and impactful event for everyone. 
                </p>
            </div>
        </div>
        <div className="mt-10 relative mb-4 mx-4 md:mx-6 overflow-x-auto flex flex-nowrap z-50">
            <ul className="flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4 overflow-x-auto">
                <li className='flex h-[488px] w-[350px] md:w-[375px] items-center justify-center'>
                    <div className="relative h-full w-full rounded-2xl border-3 border-accent">
                        <div className="h-full w-full overflow-hidden">
                            <img src="/gdg-assets/organizer_1.jpg" className='h-full w-full rounded-xl object-cover' alt="Speaker image" />
                        </div>
                        <div className="absolute z-10 bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2 w-5/6">
                            <div className="flex flex-col px-6 py-2 rounded-full flex-grow bg-white">
                                <span className='font-medium  w-full truncate'>Ndifon Ndifon Ndifon</span>
                                <small>GDG Co-Organizer</small>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex justify-center items-center cursor-pointer h-[30px] w-[30px] rounded-sm p-[2px] bg-black/50">
                                    <img src="/icons/x.svg" className='h-full w-full rounded-xl object-cover' alt="X" />
                                </div>
                                <div className="flex justify-center items-center cursor-pointer h-[30px] w-[30px] rounded-sm p-[2px] bg-black/50">
                                    <img src="/icons/linkedin.svg" className='h-full w-full rounded-xl object-cover' alt="X" />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='flex h-[488px] w-[375px] items-center justify-center'>
                    <div className="relative h-full w-full rounded-2xl border-3 border-chart-2">
                        <div className="h-full w-full overflow-hidden">
                            <img src="/gdg-assets/organizer_1.jpg" className='h-full w-full rounded-xl object-cover' alt="Speaker image" />
                        </div>
                        <div className="absolute z-10 bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2 w-5/6">
                            <div className="flex flex-col px-6 py-2 rounded-full flex-grow bg-white">
                                <span className='font-medium  w-full truncate'>Ndifon Ndifon Ndifon</span>
                                <small>Volunteer</small>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex justify-center items-center cursor-pointer h-[30px] w-[30px] rounded-sm p-[2px] bg-black/50">
                                    <img src="/icons/x.svg" className='h-full w-full rounded-xl object-cover' alt="X" />
                                </div>
                                <div className="flex justify-center items-center cursor-pointer h-[30px] w-[30px] rounded-sm p-[2px] bg-black/50">
                                    <img src="/icons/linkedin.svg" className='h-full w-full rounded-xl object-cover' alt="X" />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='flex h-[488px] w-[375px] items-center justify-center'>
                    <div className="relative h-full w-full rounded-2xl border-3 border-chart-1">
                        <div className="h-full w-full overflow-hidden">
                            <img src="/gdg-assets/organizer_1.jpg" className='h-full w-full rounded-xl object-cover' alt="Speaker image" />
                        </div>
                        <div className="absolute z-10 bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2 w-5/6">
                            <div className="flex flex-col px-6 py-2 rounded-full flex-grow bg-white">
                                <span className='font-medium  w-full truncate'>Ndifon Ndifon Ndifon</span>
                                <small>GDG Co-Organizer</small>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex justify-center items-center cursor-pointer h-[30px] w-[30px] rounded-sm p-[2px] bg-black/50">
                                    <img src="/icons/x.svg" className='h-full w-full rounded-xl object-cover' alt="X" />
                                </div>
                                <div className="flex justify-center items-center cursor-pointer h-[30px] w-[30px] rounded-sm p-[2px] bg-black/50">
                                    <img src="/icons/linkedin.svg" className='h-full w-full rounded-xl object-cover' alt="X" />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='flex h-[488px] w-[375px] items-center justify-center'>
                    <div className="relative h-full w-full rounded-2xl border-3 border-chart-4">
                        <div className="h-full w-full overflow-hidden">
                            <img src="/gdg-assets/organizer_1.jpg" className='h-full w-full rounded-xl object-cover' alt="Speaker image" />
                        </div>
                        <div className="absolute z-10 bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2 w-5/6">
                            <div className="flex flex-col px-6 py-2 rounded-full flex-grow bg-white">
                                <span className='font-medium  w-full truncate'>Ndifon Ndifon Ndifon</span>
                                <small>GDG Co-Organizer</small>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex justify-center items-center cursor-pointer h-[30px] w-[30px] rounded-sm p-[2px] bg-black/50">
                                    <img src="/icons/x.svg" className='h-full w-full rounded-xl object-cover' alt="X" />
                                </div>
                                <div className="flex justify-center items-center cursor-pointer h-[30px] w-[30px] rounded-sm p-[2px] bg-black/50">
                                    <img src="/icons/linkedin.svg" className='h-full w-full rounded-xl object-cover' alt="X" />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Organisers