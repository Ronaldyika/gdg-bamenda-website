import AboutDevfestBamenda from "@/components/about-devfest-bamenda";
import AboutGDGBamenda from "@/components/about-gdg-bamenda";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Landing from "@/components/landing";
import Location from "@/components/location";
import Organisers from "@/components/organisers";
import Schedule from "@/components/schedule";
import Speakers from "@/components/speakers";
import Sponsors from "@/components/sponsors";
import Throwback from "@/components/throwback";
import Tickets from "@/components/ticket";
import CountDownTimer from "@/components/time-counter";


export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
       <Header />
      <div className="flex justify-center items-center flex-col my-15 w-full">
        <Landing />
        <CountDownTimer />
        <div className="hidden md:flex items-center justify-center my-2 mx-auto">
            <img alt="landing-footer-image" width="1000" loading="lazy" decoding="async" style={{color: 'transparent'}} src="/gdg-assets/gdg-footer-img.svg"/>
        </div>
      </div>
      <div className="bg-foreground py-10">
        <AboutDevfestBamenda />
      </div>
      <div className="bg-white py-5">
        <Schedule />
      </div>
      <div className="relative bg-foreground">
        <div className="absolute top-1 left-1">
          <img 
            className="h-[70px] md:h-[200px] lg:h-[237px]" 
            src="/gdg-assets/asteris.svg" 
            alt="GDG Asteris SVG" 
          />
        </div>
        <div className="absolute top-1 right-1">
          <img 
            className="h-[70px] md:h-[200px] lg:h-[237px]" 
            src="/gdg-assets/asteris.svg" 
            alt="GDG Asteris SVG" 
          />
        </div>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
          <img 
            className="h-[70px] md:h-[90px] lg:h-[100px]" 
            src="/gdg-assets/head-globe.svg" 
            alt="GDG People Arts"
           />
        </div>
        <Tickets />
      </div>
      <div className="bg-white py-5">
        <Speakers />
      </div>
      <div className="relative bg-foreground">
        <div className="absolute top-1 left-1">
          <img 
            className="h-[70px] md:h-[200px] lg:h-[237px]" 
            src="/gdg-assets/asteris-blue.svg" 
            alt="GDG Asteris SVG" 
          />
        </div>
        <div className="absolute top-1 right-1">
          <img 
            className="h-[70px] md:h-[200px] lg:h-[237px]" 
            src="/gdg-assets/asteris-blue.svg" 
            alt="GDG Asteris SVG" 
          />
        </div>
        <Sponsors />
      </div>
      <div className="bg-white py-5">
        <Organisers />
      </div>
      <div className="relative h-[400px] bg-[url('/images/throwback.png')] bg-cover bg-center">
        <div className="absolute top-0 left-0 h-full w-full bg-black/85 z-10"></div>
        <div className="relative z-20 h-full flex items-center justify-center">
          <Throwback />
        </div>
      </div>
      <div className="bg-white py-5">
        <Location />
      </div>
      <div className="bg-[#1E1E1E] flex flex-col gap-5 py-5">
        <AboutGDGBamenda />
        <Footer />
      </div>
    </div>
  );
}
