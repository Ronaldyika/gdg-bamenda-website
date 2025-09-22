import React from 'react'
import Button from './button';

function Throwback() {
  return (
    <section className='flex flex-col gap-8 items-center justify-center px-4 md:px-0'>
      <Button label='Throwback' className="bg-white border-none py-4" />
      <div className="flex items-center justify-center shrink-0">
        <h1 className='text-white text-center font-medium text-3xl md:text-4xl'>Back to Devfest 2024 Bamenda</h1>
      </div>
      <Button className="gap-4 px-10 py-4 bg-accent border-none" label="View Highlights and Photos" icon="/icons/play.svg" />
    </section>
  )
}

export default Throwback;