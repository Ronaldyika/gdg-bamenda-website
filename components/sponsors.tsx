import React from 'react'
import Button from './button';

function Sponsors() {
  return (
    <section className='container mx-auto flex flex-col justify-center items-center py-[5rem] md:py-[10rem] pb-[8rem]'>
        <div className="w-full max-w-2xl flex justify-center items-center flex-col space-y-4">
            <div className="flex justify-center items-center mb-6 md:mb-10">
                <Button label='Sponsors & Partners' className='bg-white py-4 text-lg' />
            </div>
            <div className="my-2">
                <h1 className='text-2xl text-white md:text-4xl font-medium text-center capitalize'><strong>Powering The Future of Tech</strong></h1>
            </div>
            <div className="flex justify-center items-center flex-col space-y-5 my-8">
                <div className="my-6 mt-8 flex items-center justify-center">
                    <Button label='Our Official Sponsor' className='border-1 capitalize text-white border-gray-100 font-medium [word-spacing:4px] border-dashed text-lg' />
                </div>
                <div className="flex justify-center items-center my-4">
                    <img alt="Google" loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/google-logo.svg"/>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center flex-col space-y-4 w-full">
            <div className="my-6 mt-8 flex items-center justify-center">
                <Button label='Other Sponsors' className='border-1 capitalize text-white border-gray-100 font-medium [word-spacing:4px] border-dashed text-lg' />
            </div>
            <div className="flex gap-2 w-full">
                <div className="hidden md:flex justify-center items-center">
                    <img 
                        src="/gdg-assets/curly-brace-left.svg" 
                        className="block" 
                        alt="scribble-left" 
                    />
                </div>
                <div className="flex-grow flex gap-1 px-4 justify-center overflow-x-auto">
                    <img 
                        src="/gdg-assets/logo.png" 
                        className="h-[162px]" 
                        alt="scribble-left" 
                    />
                    <img 
                        src="/gdg-assets/logo.png" 
                        className="h-[162px]" 
                        alt="scribble-left" 
                    />
                    <img 
                        src="/gdg-assets/logo.png" 
                        className="h-[162px]" 
                        alt="scribble-left" 
                    />
                    <img 
                        src="/gdg-assets/logo.png" 
                        className="h-[162px]" 
                        alt="scribble-left" 
                    />
                </div>
                <div className="hidden md:flex justify-center items-center">
                    <img 
                        src="/gdg-assets/curly-brace-right.svg" 
                        className="block" 
                        alt="scribble-left" 
                    />
                </div>
            </div>
        </div>

        <div className="flex justify-center mt-15 items-center flex-col space-y-4 w-full">
            <div className="my-6 mt-8 flex items-center justify-center">
                <Button label='Community Partners' className='border-1 capitalize text-white border-gray-100 font-medium [word-spacing:4px] border-dashed text-lg' />
            </div>
            <div className="flex gap-2 w-full">
                <div className="hidden md:flex justify-center items-center">
                    <img 
                        src="/gdg-assets/curly-brace-left.svg" 
                        className="block" 
                        alt="scribble-left" 
                    />
                </div>
                <div className="flex-grow flex gap-1 px-4 justify-center overflow-x-auto">
                    <img 
                        src="/gdg-assets/logo.png" 
                        className="h-[162px]" 
                        alt="scribble-left" 
                    />
                    <img 
                        src="/gdg-assets/logo.png" 
                        className="h-[162px]" 
                        alt="scribble-left" 
                    />
                    <img 
                        src="/gdg-assets/logo.png" 
                        className="h-[162px]" 
                        alt="scribble-left" 
                    />
                    <img 
                        src="/gdg-assets/logo.png" 
                        className="h-[162px]" 
                        alt="scribble-left" 
                    />
                </div>
                <div className="hidden md:flex justify-center items-center">
                    <img 
                        src="/gdg-assets/curly-brace-right.svg" 
                        className="block" 
                        alt="scribble-left" 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sponsors;