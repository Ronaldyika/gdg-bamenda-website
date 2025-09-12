import CommunityPartners from "@/components/community-partner";
import DevfestEventStructure from "@/components/devfest-structure";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { AnimatedTags, MobileScrollingTags } from "@/components/landing";
import Location from "@/components/location";
import PreviousDevfestRecap from "@/components/previous-devfest-recap";
import Speakers from "@/components/speakers";
import Sponsors from "@/components/sponsors";
import Tickets from "@/components/ticket";


export default function Home() {
  return (
    <div className="">
      <div className="bg-[#FCF4F4]">
        <Header />
      </div>
      <div>
          <div className="bg-[#FCF4F4] md:min-h-full pb-12 md:pb-32 relative overflow-hidden">
            <AnimatedTags />
                <div className="px-6 py-10 md:py-20">
                    <section className="max-w-7xl mx-auto elative">
                        <div className="flex flex-col items-center justify-center gap-6 max-w-[500px] mx-auto">
                            <h1 className="text-[74px] font-bold text-center leading-[100%]">
                                Devfest <br className="hidden md:block"/>Bamenda
                            </h1>
                            <p className="text-center text-2xl text-[#5D5D5D] font-bold text-[18px] leading-[28px]">Join us at DevFest Bamenda 2025 from November 28th and November 29th, 2025. Bamend &#x27;s largest tech celebration of the year!</p>
                        </div>
                    </section>
                    <div className="flex justify-center mt-6">
                        <a className="z-[100] pointer-events-auto" rel="noopener noreferrer" target="_blank" href="https://gdg.community.dev/events/details/google-gdg-ilorin-presents-devfest-ilorin-2025?utm_source=https://devfestilorin.com">
                            <button className="inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-[40px] text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-6 py-3 has-[&gt;svg]:px-4 relative pointer-events-auto" data-slot="button">
                                Get Tickets
                                <span className="flex items-center justify-center rounded-[34px] p-1 px-[7px] bg-white">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-up-right size-4" aria-hidden="true">
                                        <path d="M13 5H19V11"></path>
                                        <path d="M19 5L5 19"></path>
                                    </svg>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            <MobileScrollingTags />
          </div>
          <section className="bg-[#1E1E1E]">
              <PreviousDevfestRecap />
          </section>
          <section className="bg-[#FCF4F4]">
              <DevfestEventStructure />
          </section>
          <section className="bg-[#1E1E1E]">
              <Location />
          </section>
          <section className="bg-[#FCF4F4]">
              <Speakers />
          </section>
          <section className="bg-[#F0F0F0]">
              <Sponsors />
          </section>
          <section className="bg-[#FCF4F4]">
            <CommunityPartners />
            <Tickets />
          </section>
      </div>
      <Footer />
    </div>
  );
}
