import React from 'react'
import ProfilePhoto from '../img/profile.png'
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

            <div className='container mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-10'>
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
                                Anete Asafreja
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                            Full Stack Developer building modern web applications with React, Node.js, and PostgreSQL.
                            Experienced in developing user-focused interfaces, REST APIs, and full-stack projects using MERN and PERN stacks.
                        </p>

                        <div className='flex gap-4 pt-6'>
                            <button className='px-2 py-2 bg-primary rounded hover:bg-primary/80'
                                onClick={() => scrollToSection("#portfolio")}>
                                View my work
                            </button>

                            <a
                                href="https://drive.google.com/file/d/1vX6IaWuRvOfa1ewhdS-0PrJ3yx3NvzLd/view" target='_blank' rel='noopener noreferrer'
                                className="px-2 py-2 border-2 rounded border-primary/20 hover:border-primary/40 hover:bg-primary/5 inline-block">
                                Download CV
                            </a>


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
                <div className="w-64 md:w-80 lg:w-96 lg:scale-125 lg:origin-bottom-right">
                    <img
                        src={ProfilePhoto}
                        alt="Anete Asafreja"
                        className="w-full h-auto rounded-3xl "
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
