import React from 'react'

import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { IoMailOutline } from "react-icons/io5";
import { CardHeader, Card, CardTitle, CardContent } from './Card'

const Contact = () => {
    return (
        <section id="contact" className='bg-muted/30 section-padding'>
            <div className='container mx-auto max-w-4xl'>
                <div className='text-center mb-16 '>
                    <h2 className="text-4xl text-foreground md:text-5xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Feel free to reach out!
                    </p>
                </div>

                <div className='grid md:grid-cols-3 gap-8 mb-12'>
                    <Card className='card-hover text-center'>
                        <CardContent className='pt-6'>
                            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <IoMailOutline className='w-6 h-6 text-primary' />
                            </div>
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className='text-sm text-muted-foreground hover:text-primary'>anete.asafreja@gmail.com</p>
                        </CardContent>
                    </Card>

                    <Card className='card-hover text-center'>
                        <CardContent className='pt-6'>
                            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <FiLinkedin className='w-6 h-6 text-primary' />
                            </div>
                            <h3 className="font-semibold mb-2">LinkedIn</h3>
                            <a
                                href="https://www.linkedin.com/in/anete-asafreja-a03231138/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                linkedin.com/in/anete
                            </a>
                        </CardContent>
                    </Card>

                    <Card className='card-hover text-center'>
                        <CardContent className='pt-6'>
                            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <FiGithub className='w-6 h-6 text-primary' />
                            </div>
                            <h3 className="font-semibold mb-2">GitHub</h3>
                            <a
                                href="https://github.com/aasafreja/web-portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                github.com/aasafreja
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section >
    )
}

export default Contact
