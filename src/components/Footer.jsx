import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className='bg-card border-t border-border py-8'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                    <div className='text-center md:text-left'>
                        <p className='text-sm text-muted-foreground'>  © 2025 Anete Asafreja. All rights reserved.</p>
                        <p className="text-xs text-muted-foreground mt-1">
                            Built with React, and Tailwind CSS
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="https://github.com/aasafreja/web-portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="GitHub"
                        >
                            <FiGithub className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/anete-asafreja-a03231138/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:anete.asafreja@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Email"
                        >
                            <IoMailOutline className="w-5 h-5" />
                        </a>
                    </div>
                </div>


            </div>
        </footer>
    )
}

export default Footer
