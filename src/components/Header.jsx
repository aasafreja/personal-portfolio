import React, { useEffect, useState } from 'react'
import { navItems } from '../data/data';


const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

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
                <div className='md:flex items-center gap-8'>
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
            </div>
        </nav >
    )
}

export default Header
