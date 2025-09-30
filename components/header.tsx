'use client';
import React from "react";
import Button from "./button";
import Link from "next/link";
import { items } from "@/data/data";
import MobileNavModal from "./mobile-nav-modal";
import { smoothScrollTo } from "@/lib/smooth-scroll";

function Header() {
    const [toggle, setToggle] = React.useState(false);
    
    const handleNavigation = (sectionId: string) => {
        smoothScrollTo(sectionId);
    };
    
    return (
        <>
            <header className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10 flex w-full items-center justify-between">
                <Link href={"/"}>
                    <img alt="logo" loading="lazy" decoding="async" style={{color: 'transparent'}} src="/logo/gdg_bamenda_logo.svg"/>
                </Link>
                <nav className="hidden lg:flex items-center">
                    <ul className="flex items-center gap-1 justify-center">
                        {items.map((item, index) => {
                            return (
                                <li key={index}>
                                    <button
                                        onClick={() => handleNavigation(item.toLowerCase())}
                                        className="text-sm py-2 px-4 rounded-full hover:bg-gray-100 transition-colors"
                                    >
                                        {item}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="flex items-center justify-center gap-2">
                    <Button className="gap-3 hidden md:flex bg-accent cursor-pointer" label="Get Your Ticket" icon="/icons/icon.svg" />
                    <div className="block lg:hidden">
                        <button 
                            onClick={() => setToggle(true)}
                            className="p-2 border-1 border-gray-900 bg-accent md:bg-white rounded-xl"
                        >
                            <img src="/icons/menu.svg" alt="menu" />
                        </button>
                    </div>
                </div>
            </header>
            
            <MobileNavModal 
                isOpen={toggle} 
                onClose={() => setToggle(false)} 
                onNavigate={handleNavigation}
            />
        </>
    );
}

export default Header;
