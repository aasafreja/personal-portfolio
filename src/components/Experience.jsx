import React from 'react'
import { experiences, education } from '../data/data'
import { CardHeader, Card, CardTitle, CardContent } from './Card'

const Experience = () => {
    return (
        <section id="experience" className='section-padding bg-muted/30'>
            <div className='container mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-foreground text-4xl md:text-5xl font-bold mb-4'>Experience & Education</h2>
                    <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>My professional journey and qualifications</p>
                </div>

                <div className='space-y-12'>
                    {/* Experience section */}
                    <div>
                        <h3 className='text-foreground text-2xl font-bold mb-6'>Professional Experience</h3>
                        <div className='space-y-6'>
                            {experiences.map((item, index) => (
                                <Card key={index} className="border-l-4 border-l-primary">
                                    <CardHeader>
                                        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2'>
                                            <CardTitle className='text-2xl'>
                                                {item.role}
                                            </CardTitle>
                                            <div className="text-foreground hover:bg-primary/20 w-fit rounded-full border px-2.5 py-0.5 text-xs font-semibold inline-flex items-center">
                                                {item.type}
                                            </div>
                                        </div>
                                        <div className='flex flex-col md:flex-row gap-2 mb-2 text-muted-foreground'>
                                            <span className="font-semibold">{item.company}</span>
                                            <span className='hidden md:inline'> • </span>
                                            <span>{item.period}</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className='space-y-4'>
                                        <ul className='space-y-2 list-disc list-inside text-muted-foreground'>
                                            {item.description.map((task, i) => (
                                                <li key={i}>
                                                    {task}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className='flex flex-wrap gap-2 pt-2'>
                                            {item.skills.map(skill => (
                                                <div className="border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full border px-2.5 py-0.5 text-xs font-semibold inline-flex items-center">
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Education section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-foreground">Education & Certificates</h3>
                        <div className='grid md:grid-cols-2 gap-6'>
                            {education.map((edu, index) => (
                                <Card className='card-hover'>
                                    <CardHeader>
                                        <CardTitle className='text-xl text-foreground'>{edu.degree}</CardTitle>
                                        <div className="text-muted-foreground">
                                            <p className="font-semibold">{edu.institution}</p>
                                            <p className="text-sm">{edu.period}</p>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{edu.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
