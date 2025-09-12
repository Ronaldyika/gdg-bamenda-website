'use client';
import React from "react";

function Header() {
    const [toggle, setToggle] = React.useState(false);
    return (
        <header className="max-w-7xl mx-auto px-6 py-10 md:py-20 flex h-20 w-full shrink-0 items-center justify-between">
            <div className="order-2 flex items-center justify-center lg:hidden p-2 rounded-4xl bg-black">
                <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 gap-1.5 px-3 has-[&gt;svg]:px-2.5 bg-white h-[26px] w-[32px] rounded-4xl"
                    data-slot="button"
                >
                    <svg
                        className="h-6 w-6" text-black
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                    <span className="sr-only">Toggle navigation menu</span>
                </button>
            </div>
            <a className="mr-6" href="/">
                {/* <img alt="logo" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" style={{color: 'transparent'}} src="/devfest-ilorin.svg"/> */}
                DevFest Bamenda
            </a>
            <nav className="ml-auto hidden lg:flex gap-6 items-center">
                <a
                    className="inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 font-medium transition-all hover:underline focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-[#2763E9]"
                    href="/sponsors"
                >
                    Sponsors
                </a>
                <a
                    className="ml-6"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://gdg.community.dev/events/details/google-gdg-ilorin-presents-devfest-ilorin-2025?utm_source=https://devfestilorin.com"
                >
                    <button
                        className="inline-flex text-blac items-center bg-gray-950 text-white justify-center gap-4 whitespace-nowrap rounded-[40px] text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*=&#x27;size-&#x27;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-6 py-3 has-[&gt;svg]:px-4"
                        data-slot="button"
                    >
                        Get Tickets
                        <span className="flex items-center justify-center rounded-[34px] p-1 px-[7px] bg-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-move-up-right size-4"
                                aria-hidden="true"
                            >
                                <path d="M13 5H19V11"></path>
                                <path d="M19 5L5 19"></path>
                            </svg>
                        </span>
                    </button>
                </a>
            </nav>
        </header>
    );
}

export default Header;
