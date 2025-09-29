import React from 'react'

function DevFestBgPattern() {
  return (
    <section className='w-full h-full flex relative'>
        <div
        className="absolute top-4 right-20 h-[4rem] md:h-[6rem] lg:h-[8rem] w-[4rem] md:w-[6rem] lg:w-[8rem] rounded-full z-10
                    bg-[radial-gradient(circle,_rgba(66,133,244,1)_0%,_transparent_70%)]  blur-3xl"
        ></div>

        <div
        className="absolute bottom-4 right-20 h-[4rem] md:h-[6rem] lg:h-[8rem] w-[4rem] md:w-[6rem] lg:w-[8rem] rounded-full z-10
                    bg-[radial-gradient(circle,_rgba(220,38,38,1)_0%,_transparent_70%)]  blur-3xl"
        ></div>
    </section>
  )
}

export default DevFestBgPattern;