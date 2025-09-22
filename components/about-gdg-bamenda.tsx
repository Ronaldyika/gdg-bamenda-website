import { items, socials } from '@/data/data';
import Image from 'next/image';

function AboutGDGBamenda() {
  return (
    <section className='container flex flex-col gap-10 md:gap-5 max-w-7xl mx-auto px-5 md:px-20 py-15 z-20'>
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center gap-8 w-full md:w-[486px] text-white">
                <h1 className='text-4xl md:text-6xl font-medium'>About Google Developer Group (GDG) <span className='text-chart-1'>Bamenda</span></h1>
                <small className='text-[18px]'>Google Developer Group (GDG) brings together local developers and technologists, from beginner to advanced, to connect, learn, and grow with Google's technologies and experts.</small>
            </div>
            <div className="flex justify-center items-center">
                <img 
                    className="" 
                    src="/gdg-assets/GDG-Bamenda-Pro.svg" 
                    alt="GDG Asteris SVG" 
                />
            </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 gap-6">
            <div className="flex gap-4 items-center justify-center">
                <ul className="flex flex-wrap text-white items-center gap-1 justify-center">
                    {items.map((item, index) => {
                        return <li key={index} className="text-[18px] cursor-pointer py-2 px-4 rounded-full">{item}</li>
                    })}
                </ul>
            </div>
            <div className="flex justify-center items-center">
                <img 
                    className="" 
                    src="/gdg-assets/gdg-asset-1.svg" 
                    alt="GDG Asteris SVG" 
                />
            </div>
            <div className="flex">
            <div className="flex items-center gap-6">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            className="bg-[#C3ECF6] rounded-2xl hover:bg-[#F9AB00] transition"
                            rel="noopener noreferrer"
                            target="_blank"
                            href={social.link}
                        >
                            <Image
                                alt={social.name}
                                width={50}
                                height={50}
                                className="w-[50px]"
                                style={{ color: 'transparent' }}
                                src={social.icon}
                                loading="lazy"
                                unoptimized
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutGDGBamenda;