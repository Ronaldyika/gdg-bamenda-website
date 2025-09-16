import React from 'react'
import Button from './button';

function Tickets() {
  return (
    <section className='container mx-auto flex flex-col justify-center items-center py-[10rem] pb-[8rem]'>
        <div className="w-full max-w-2xl flex justify-center items-center flex-col space-y-4">
            <div className="flex justify-center items-center">
                <Button label='Get Your Ticket' className='bg-white py-4 text-lg' />
            </div>
            <div className="my-2">
                <h1 className='text-3xl text-white md:text-4xl font-medium text-center'><strong>Don't miss out</strong></h1>
            </div>
            <div className="text-foreground mx-2 mt-7">
                <p className='text-center text-white text-lg'>
                    Join us for an exciting DevFest 2025, spanning across two days, dedicated to diving 
                    deep into the world of technology and innovation!
                </p>
            </div>
            <div className="my-6 mb-8 flex items-center justify-center">
                <Button label='Get Your Ticket' className='border-none bg-accent py-4 px-10 gap-4' icon='/icons/icon.svg' />
            </div>
            <div className="flex justify-center items-center w-full">
                <div className="hidden lg:flex gap-[14.6rem] justify-center items-center relative">
                    {/* White card */}
                    <div className="w-[335px] h-[604px] -rotate-[20deg] flex flex-col justify-between items-center translate-x-6 bg-white shadow-xl">
                        <div className="flex items-center p-4 justify-center">
                            <img alt="devfest-bamenda-logo" className='' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/devfest-bameda-logo-green.svg"/>
                        </div>
                        <div className="flex flex-grow flex-col gap-4 justify-center items-center">
                            <div className="flex items-center justify-center gap-6">
                                <h2 className='font-medium text-3xl'>Day 1</h2>
                                <Button className="border-1 border-gray-500 border-dashed text-lg" label="Workshops" />
                            </div>
                            <div className="flex justify-center items-center">
                                <Button className="bg-gray-200" label="Free" />
                            </div>
                            <div className="flex justify-center items-center">
                                <img alt="devfest-logo" className='h-[147px] w-[149px]' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/barcode.png"/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mb-4">
                            <img alt="devfest-logo" className='h-[66.21px]' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/gdg-bamenda.svg"/>
                        </div>
                    </div>

                    {/* Green card */}
                    <div className="w-[335px] h-[604px] rotate-[20deg] flex flex-col justify-between items-center -translate-x-6 bg-green-200 shadow-xl">
                        <div className="flex items-center p-4 justify-center">
                            <img alt="devfest-bamenda-logo" className='' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/devfest-bameda-logo-green.svg"/>
                        </div>
                        <div className="flex flex-grow flex-col gap-4 justify-center items-center">
                            <div className="flex items-center justify-center gap-4">
                                <h2 className='font-medium text-3xl'>Day 2</h2>
                                <Button className="border-1 border-gray-500 border-dashed text-lg" label="Main Conference" />
                            </div>
                            <div className="flex justify-center items-center">
                                <Button className="bg-gray-200" label="Paid VIPs" />
                            </div>
                            <div className="flex justify-center items-center">
                                <img alt="devfest-logo" className='h-[147px] w-[149px]' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/barcode.png"/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mb-4">
                            <img alt="devfest-logo" className='h-[66.21px]' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/gdg-bamenda.svg"/>
                        </div>
                    </div>
                </div>

                {/* Mobile layout */}
                <div className="flex lg:hidden overflow-x-auto space-x-4 px-4 snap-x snap-mandatory">
                    <div className="w-[335px] h-[604px] bg-white shadow-lg flex flex-col items-center justify-center rounded-lg flex-shrink-0 snap-center">
                        <div className="flex items-center p-4 justify-center">
                            <img alt="devfest-bamenda-logo" className='' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/devfest-bameda-logo-green.svg"/>
                        </div>
                        <div className="flex flex-grow flex-col gap-4 justify-center items-center">
                            <div className="flex items-center justify-center gap-6">
                                <h2 className='font-medium text-3xl'>Day 1</h2>
                                <Button className="border-1 border-gray-500 border-dashed text-lg" label="Workshops" />
                            </div>
                            <div className="flex justify-center items-center">
                                <Button className="bg-gray-200" label="Free" />
                            </div>
                            <div className="flex justify-center items-center">
                                <img alt="devfest-logo" className='h-[147px] w-[149px]' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/barcode.png"/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mb-4">
                            <img alt="devfest-logo" className='h-[66.21px]' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/gdg-bamenda.svg"/>
                        </div>
                    </div>
                    <div className="w-[335px] h-[604px] bg-green-200 shadow-lg flex flex-col items-center justify-center rounded-lg flex-shrink-0 snap-center">
                        <div className="flex items-center p-4 justify-center">
                            <img alt="devfest-bamenda-logo" className='' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/devfest-bameda-logo-green.svg"/>
                        </div>
                        <div className="flex flex-grow flex-col gap-4 justify-center items-center">
                            <div className="flex items-center justify-center gap-4">
                                <h2 className='font-medium text-3xl'>Day 2</h2>
                                <Button className="border-1 border-gray-500 border-dashed text-lg" label="Main Conference" />
                            </div>
                            <div className="flex justify-center items-center">
                                <Button className="bg-gray-200" label="Paid VIPs" />
                            </div>
                            <div className="flex justify-center items-center">
                                <img alt="devfest-logo" className='h-[147px] w-[149px]' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/barcode.png"/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mb-4">
                            <img alt="devfest-logo" className='h-[66.21px]' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/gdg-bamenda.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tickets;