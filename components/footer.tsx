import { devfestHastags } from "@/data/data";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="flex flex-col w-full items-center justify-center gap-10">
            <div className="flex gap-6 overflow-y-auto">
                {devfestHastags.map((hashtag, index) => {
                    return <span className="text-[20px] text-white" key={index}>{hashtag}</span>
                })}
            </div>
            <div className="flex text-white justify-center items-center">
                {year} © gdgbamenda 
            </div>
        </footer>
    )
}

export default Footer;