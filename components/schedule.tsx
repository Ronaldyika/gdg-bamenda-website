import React from 'react';
import Button from './button';

interface EventBadge {
    label: string;
    imageUrl: string
}

const eventBadges: EventBadge[] = [
    {
        label: "Web Event Badge",
        imageUrl: "/events/event-web.svg"
    },
    {
        label: "AI Event Badge",
        imageUrl: "/events/event-ai.svg"
    },
    {
        label: "Andriod Event Badge",
        imageUrl: "/events/event-andriod.svg"
    },
    {
        label: "Cloud Event Badge",
        imageUrl: "/events/event-cloud.svg"
    },
];

function Schedule() {
  return (
    <section className='relative container mx-auto my-15 px-6 md:px-2 flex flex-col justify-center items-center gap-4'>
        <div className="w-full max-w-2xl flex justify-center items-center flex-col space-y-7">
            <div className="flex justify-center items-center">
                <Button label='Schedule' className='bg-white py-4 text-lg' />
            </div>
            <div className="my-6">
                <h1 className='text-3xl md:text-4xl font-medium text-center'><strong>DevFest Bamenda 2025 : Two Days of Awesomeness</strong></h1>
            </div>
            <div className="text-foreground mx-2">
                <p className='text-center text-lg'>
                    Join us for an exciting DevFest 2025, spanning across two days, 
                    dedicated to diving deep into the world of technology and innovation!
                </p>
            </div>
            <div className="my-6 flex flex-col items-center justify-center md:flex-row gap-4 md:gap-10">
                <Button label='Day 1 - Friday 28th' className='border-none bg-accent py-4' />
                <Button label='Day 2 - Saturday 29th' className='bg-white py-4' />
            </div>
            <div className="text-foreground mx-2 flex flex-col gap-2 mt-5">
                <p className='text-center text-lg'>
                    Focus on the workshops and hands-on Google tech sessions
                </p>
                <div className="flex flex-col items-center justify-center gap-2">
                    <span className='block font-light'>Featuring:</span>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <Button className="border-1 border-gray-500 border-dashed" label="Workshops" />
                        <Button className="border-1 border-gray-500 border-dashed" label="CODELABS" />
                    </div>
                </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 place-content-center gap-18">
                {
                    eventBadges.map((event, index) => {
                       return (<div key={index} className="flex justify-center items-center">
                            <img alt={event.label} className='h-[200px]' loading="lazy" decoding="async" style={{color: 'transparent'}} src={event.imageUrl}/>
                        </div>)
                    })
                }
            </div>
        </div>
        <div className="absolute top-20 left-10 hidden lg:block">
            <img alt="ball vertical arts" loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/ball-art-vertical.svg"/>
        </div>
        <div className="absolute bottom-20 right-10 hidden lg:block">
            <img alt="ball vertical arts" loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/ball-art-horizontal.svg"/>
        </div>
    </section>
  )
}

export default Schedule;