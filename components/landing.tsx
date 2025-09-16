import React from 'react'
import Button from './button'

function Landing() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center px-6 md:px-2">
      <div className="pb-10">
        <img alt="devfest-logo" className='hidden md:block' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/devfest.svg"/>
        <img alt="devfest-logo" className='block md:hidden' loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/devfest-mobile.svg"/>
      </div>
      <div className="flex flex-col items-center justify-center my-3 gap-4">
        <p className="text-2xl text-center font-light">Experience <span className="text-accent">Tech-Magic</span> at DevFest Bamenda 2025!</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
          <Button className="border-1 border-gray-500 border-dashed" label="November 28-39, 2025" />
          <Button className="border-1 border-gray-500 border-dashed" label="Epic Event Center" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 gap-2">
        <img className='hidden md:block' alt="button-direction" loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/arrow-right.svg"/>
        <div className="flex justify-center items-center">
          <Button className="gap-4 px-15 py-4 bg-accent" label="Get Your Ticket" icon="/icons/icon.svg" />
        </div>
      </div>
    </section>
  )
}

export default Landing;