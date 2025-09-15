import AboutDevfestBamenda from "@/components/about-devfest-bamenda";
import Header from "@/components/header";
import Landing from "@/components/landing";
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
    </div>
  );
}
