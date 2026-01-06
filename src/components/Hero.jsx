import React from 'react'
import ProfilePhoto from '../img/profile5.png'
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="home" className='relative min-h-screen flex items-center overflow-hidden'>
            {/* Diagonal Split Background */}
            <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-muted/30 from-primary/10 via-accent/5 to-transparent clip-left">
                </div>
                <div class="absolute inset-0 bg-gradient-to-br from-white/90 to-white/50 clip-right"></div>
            </div>
            <div className='space-y-1'>
                <div className='container mx-auto px-6 md:px-12 lg:px-24 
               pt-16 pb-6 md:py-20 relative z-10'>
                    <div className='grid md:grid-cols-2 gap-12 items-center'>
                        {/* Left: text content  */}
                        <div className='space-y-6'>
                            <div className='inline-block rounded-full bg-primary/10 px-4 py-2 border border-primary/20'>
                                <span className='text-primary font-semibold text-sm uppercase'>
                                    Full Stack Developer
                                </span>
                            </div>

                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold font-grotesk'>
                                Hi, I'm{" "}

                                <span className='gradient-text'>
                                    Aneta Asafreya
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                                Full Stack Developer building modern web applications with React, Node.js, and PostgreSQL.
                                Experienced in developing user-focused interfaces, REST APIs, and full-stack projects using MERN and PERN stacks.
                            </p>

                            <div className='flex md:justify-start justify-center'>
                                <div className='flex gap-4 pt-6'>
                                    <button
                                        className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-11 px-8 bg-primary 
                                        text-primary-foreground hover:bg-primary/90 shadow-lg  duration-300"
                                        onClick={() => scrollToSection("#portfolio")}>
                                        View My Work
                                    </button>

                                    <a href="https://drive.google.com/file/d/1z58gfaxciY-1RXpe0voE9V-4qss0ZL4C/view" target='_blank' rel='noopener noreferrer'
                                        className="inline-flex items-center justify-center gap-2  rounded-md text-sm font-medium 
    h-11 px-8 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5  duration-300">
                                        Download CV
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-6">
                                <a href="https://github.com/aasafreja/web-portfolio" target='_blank' rel='noopener noreferrer'
                                    className='flex items-center justify-center w-12 h-12 rounded-full bg-white border border-white/10 text-foreground hover:text-primary hover:scale-110 transition-transform'>
                                    <FiGithub className="w-6 h-6" />
                                </a>
                                <a href="https://www.linkedin.com/in/anete-asafreja-a03231138" target='_blank' rel='noopener noreferrer'
                                    className='flex items-center justify-center w-12 h-12 rounded-full bg-white border  border-white/10 text-foreground hover:text-primary hover:scale-110 transition-transform'>
                                    <FiLinkedin className="w-6 h-6" />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end md:absolute md:bottom-0 md:right-0">

                    <div className="flex justify-center md:justify-end md:absolute md:bottom-0 md:right-0">
                        <div className="w-72 md:w-[420px] lg:w-[520px] xl:w-[600px]">
                            <img
                                src={ProfilePhoto}
                                alt="Anete Asafreja"
                                className="w-full h-auto opacity-90"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
