import React, { useEffect, useState } from 'react'
import { navItems } from '../data/data';
import { Menu, X } from "lucide-react";


const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
            ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
            }`}>
            <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
                <a href="#home"
                    className='text-xl font-bold text-foreground hover:text-primary transition-colors'
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("#home");
                    }}
                >
                    Personal portfolio
                </a>
                <div className='hidden md:flex items-center gap-8'>
                    {navItems.map(item => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.href);
                            }}
                            className='text-sm font-medium text-muted-foreground hover:text-primary'>
                            {item.label}
                        </a>
                    ))}

                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>


            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-background border-t border-border">
                    <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav >
    )
}

export default Header
