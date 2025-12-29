import React, { useState } from 'react'
import { projects, certificates, techStack } from '../data/data'
import { CardHeader, Card, CardTitle, CardContent, CardDescription } from './Card'
import { FiGithub } from 'react-icons/fi';
import { RiExternalLinkLine } from "react-icons/ri";



const Portfolio = () => {
    const [active, setActive] = useState("projects");

    return (
        <section id="portfolio" className='section-padding bg-muted/30'>
            <div className='container mx-auto'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl text-foreground md:text-5xl font-bold mb-4'>Portfolio Showcase</h2>
                    <p className='text-lg text-muted-foreground'>Explore my projects, technical skills, and professional certifications</p>
                </div>

                <div className='grid grid-cols-3 mx-auto mb-12 w-full max-w-md bg-muted p-1 text-muted-foreground rounded-xl h-10'>
                    <button
                        className={`mx-1 ${active === "projects"
                            ? "bg-background text-foreground shadow-sm rounded-xl"
                            : "hover:bg-background/50 rounded-xl"}`}
                        onClick={() => setActive('projects')}
                    >Projects
                    </button>
                    <button
                        className={`mx-1 ${active === "techStack"
                            ? "bg-background text-foreground shadow-sm rounded-xl"
                            : "hover:bg-background/50 rounded-xl"}`}
                        onClick={() => setActive('techStack')}>
                        Tech Stack
                    </button>
                    <button
                        className={`mx-1 ${active === "certificates"
                            ? "bg-background text-foreground shadow-sm rounded-xl"
                            : "hover:bg-background/50 rounded-xl"}`}
                        onClick={() => setActive('certificates')}>
                        Certificates
                    </button>
                </div>

                {/* Projects Tab */}
                {active === 'projects' && <div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
                        {projects.map((project, index) => (
                            <Card key={index} className='card-hover border-border/50 overflow-hidden group'>
                                <div>
                                    <img src={project.image} alt={project.title} className='h-48 w-full object-cover' />
                                </div>

                                <CardHeader>
                                    <CardTitle className='text-xl'>{project.title}</CardTitle>
                                    <CardDescription className='text-sm leading-relaxed'>
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className='space-y-4'>
                                    <div className='flex flex-wrap gap-2'>
                                        {project.tags.map(tag => (
                                            <div className="border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full border px-2.5 py-0.5 text-xs font-semibold inline-flex items-center">{tag}</div>
                                        ))}
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="w-full inline-flex items-center justify-center gap-2 rounded-md text-sm border border-input font-medium bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 transition-colors">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center ">
                                                <FiGithub className="w-4 h-4 mr-2" />
                                                Code
                                            </a>
                                        </button>

                                        <button className="w-full inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 transition-colors">
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                <RiExternalLinkLine className="w-4 h-4 mr-2" />
                                                Demo
                                            </a>
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className='text-center'>
                        <div
                            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 transition-colors">
                            <a
                                href="https://github.com/aasafreja/web-portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2">
                                See more on GitHub
                                <RiExternalLinkLine className="w-4 h-4 ml-2" />
                            </a>
                        </div>

                    </div>
                </div>}

                {/* Tech Stack Tab */}
                {active === 'techStack' && <div className='space-y-12'>
                    {Object.entries(techStack).map(([category, skills]) => (
                        <div key={category}>
                            <h3 className='text-2xl font-bold mb-6 text-foreground'>{category}</h3>
                            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 g:grid-cols-6 gap-4'>
                                {skills.map(({ name, icon: Icon, color }) => (
                                    <div className='flex flex-col items-center gap-2'>
                                        <Icon size={40} style={{ color }} className='hover:scale-110 transition-transform duration-200'></Icon>
                                        <span className="text-sm">{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>}

                {/* Certificates Tab */}
                {active === 'certificates' &&
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {certificates.map((cert, index) => (
                            <Card key={index} className='card-hover border-primary/20'>
                                <CardHeader>
                                    <CardTitle className='text-lg text-foreground'>{cert.title}</CardTitle>
                                    <CardDescription>
                                        {cert.issuer} • {cert.year}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent >
                                    <div
                                        className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-8 transition-colors">
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2">
                                            <RiExternalLinkLine className="w-4 h-4 mr-2" />
                                            View Certificate

                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>}

            </div>
        </section >
    )
}

export default Portfolio
