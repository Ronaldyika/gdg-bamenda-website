import React from 'react'
import Image from 'next/image';

interface Social {
    name: string;
    link: string;
    icon: string;
}

function Footer() {
    const socials: Social[] = [
        {
            name: "Twitter",
            link: "https://x.com/gdgilorin",
            icon: "/socials/twitter.c404a4b6.svg"
        },
        {
            name: "Instagram",
            link: "https://instagram.com/gdgilorin",
            icon: "/socials/ig.5da23257.svg"
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/gdgilorin",
            icon: "/socials/fb.31cc0830.svg"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/company/gdg-ilorin",
            icon: "/socials/linkedin.e95a52cb.svg"
        }
    ];
    return (
        <footer className="bg-[#1E1E1E] p-4 py-20">
            <div className="flex flex-col items-center justify-center gap-10">
                <img alt="gdg-ilorin-logo" loading="lazy" width="419" height="88" decoding="async" data-nimg="1" className="w-[250px] lg:w-[300px]" style={{color: 'transparent'}} src="/gdg-asset/gdg-ilorin-logo.b06f07b9.svg"/>
                <img alt="lanyard" loading="lazy" width="472" height="46" decoding="async" data-nimg="1" className="w-[300px]" style={{color: 'transparent'}} src="/gdg-asset/footer-lanyard.15b74b64.svg"/>
                <div className="flex items-center gap-6">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            className="bg-white rounded-full hover:bg-[#F9AB00] transition"
                            rel="noopener noreferrer"
                            target="_blank"
                            href={social.link}
                        >
                            <Image
                                alt={social.name}
                                width={70}
                                height={70}
                                className="w-[70px]"
                                style={{ color: 'transparent' }}
                                src={social.icon}
                                loading="lazy"
                                unoptimized
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;