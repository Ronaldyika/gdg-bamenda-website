import AboutDevfestBamenda from "@/components/about-devfest-bamenda";
import AboutGDGBamenda from "@/components/about-gdg-bamenda";
import DevFestBgPattern from "@/components/bg-pattern";
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
import { organizers, speakers } from "@/data/data";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      <Header />

      <div id="home" className="flex h-full relative justify-center items-center flex-col my-15 w-full">
        <div
          className="absolute top-4 right-20 h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] rounded-full z-10 bg-[rgba(66,133,244,1)]
                      bg-[radial-gradient(circle,_rgba(66,133,244,1)_0%,_rgba(66,133,244,0.6)_0%,_transparent_90%)] blur-3xl"
        ></div>
        <div
          className="absolute left-20 top-1/2 h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] 
                    -translate-y-1/2 rounded-full z-10 bg-[rgba(52,168,83,1)]
                    bg-[radial-gradient(circle,_rgba(52,168,83,1)_0%,_rgba(52,168,83,0.6)_40%,_transparent_90%)] 
                    blur-3xl"
        ></div>
        <div
          className="absolute bottom-4 right-20 h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] rounded-full z-10 bg-[rgba(220,38,38,1)]
                    bg-[radial-gradient(circle,_rgba(220,38,38,1)_0%,_rgba(220,38,38,0.6)_40%,_transparent_90%)] blur-3xl"
        ></div>

        <Landing />
        <CountDownTimer />

        <div className="hidden md:flex items-center justify-center my-2 mx-auto">
          <img
            alt="landing-footer-image"
            width="1000"
            loading="lazy"
            decoding="async"
            style={{ color: "transparent" }}
            src="/gdg-assets/gdg-footer-img.svg"
          />
        </div>
      </div>

      <div id="about" className="bg-foreground py-10">
        <AboutDevfestBamenda />
      </div>

      <div id="schedule" className="relative bg-white py-5">
        <div
          className="absolute top-4 right-20 h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] rounded-full z-10 bg-[rgba(66,133,244,1)]
                      bg-[radial-gradient(circle,_rgba(66,133,244,1)_0%,_rgba(66,133,244,0.6)_0%,_transparent_90%)] blur-3xl"
        ></div>
        <div
          className="absolute left-20 top-1/2 h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] 
                    -translate-y-1/2 rounded-full z-10 bg-[rgba(52,168,83,1)]
                    bg-[radial-gradient(circle,_rgba(52,168,83,1)_0%,_rgba(52,168,83,0.6)_40%,_transparent_90%)] 
                    blur-3xl"
        ></div>
        <div
          className="absolute bottom-4 right-20 h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] rounded-full z-10 bg-[rgba(220,38,38,1)]
                    bg-[radial-gradient(circle,_rgba(220,38,38,1)_0%,_rgba(220,38,38,0.6)_40%,_transparent_90%)] blur-3xl"
        ></div>

        <Schedule />
      </div>

      <div id="ticket" className="relative bg-foreground">
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

      <div id="speakers" className="bg-white relative py-5">
        <div
          className="absolute top-4 right-20 h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] rounded-full z-10 bg-[rgba(66,133,244,1)]
                      bg-[radial-gradient(circle,_rgba(66,133,244,1)_0%,_rgba(66,133,244,0.6)_0%,_transparent_90%)] blur-3xl"
        ></div>
        <div
          className="absolute left-20 top-1/2 h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] 
                    -translate-y-1/2 rounded-full z-10 bg-[rgba(52,168,83,1)]
                    bg-[radial-gradient(circle,_rgba(52,168,83,1)_0%,_rgba(52,168,83,0.6)_40%,_transparent_90%)] 
                    blur-3xl"
        ></div>
        <div
          className="absolute bottom-4 right-20 h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] rounded-full z-10 bg-[rgba(220,38,38,1)]
                    bg-[radial-gradient(circle,_rgba(220,38,38,1)_0%,_rgba(220,38,38,0.6)_40%,_transparent_90%)] blur-3xl"
        ></div>

        <Speakers speakers={speakers} />
      </div>

      <div id="sponsors" className="relative bg-foreground">
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

      <div id="team" className="bg-white py-5">
        <Organisers organizers={organizers} />
      </div>

      <div className="relative h-[400px] bg-[url('/images/throwback.png')] bg-cover bg-center">
        <div className="absolute top-0 left-0 h-full w-full bg-black/85 z-10"></div>
        <div className="relative z-20 h-full flex items-center justify-center">
          <Throwback />
        </div>
      </div>

      <div id="venue" className="bg-white relative py-5">
        <div
          className="absolute top-4 right-20 h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] rounded-full z-10 bg-[rgba(66,133,244,1)]
                      bg-[radial-gradient(circle,_rgba(66,133,244,1)_0%,_rgba(66,133,244,0.6)_0%,_transparent_90%)] blur-3xl"
        ></div>
        <div
          className="absolute left-20 top-1/2 h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] 
                    -translate-y-1/2 rounded-full z-10 bg-[rgba(52,168,83,1)]
                    bg-[radial-gradient(circle,_rgba(52,168,83,1)_0%,_rgba(52,168,83,0.6)_40%,_transparent_90%)] 
                    blur-3xl"
        ></div>
        <div
          className="absolute bottom-4 right-20 h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] rounded-full z-10 bg-[rgba(220,38,38,1)]
                    bg-[radial-gradient(circle,_rgba(220,38,38,1)_0%,_rgba(220,38,38,0.6)_40%,_transparent_90%)] blur-3xl"
        ></div>

        <Location />
      </div>

      <div className="bg-[#1E1E1E] flex flex-col gap-5 py-5">
        <AboutGDGBamenda />
        <Footer />
      </div>
    </div>
  );
}
