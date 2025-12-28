import React from 'react'
import { Card, CardContent } from './Card'
import { Code2, Database, LineChart } from "lucide-react";

const About = () => {
    return (
        <div id="about" className='section-padding bg-muted/30'>
            <div className='container mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        About Me
                    </h2>
                    <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                        Learning and building web applications with MERN and PERN stacks. Focused on creating clean, responsive, and scalable projects.
                    </p>
                </div>

                {/* CARDS */}
                <div className='grid md:grid-cols-3 gap-8 mb-12'>
                    <Card className='card-hover border-primary/20'>
                        <CardContent className='pt-6 text-center space-y-4'>
                            <div className='w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center'>
                                <Code2 className='w-8 h-8 text-primary' />
                            </div>
                            <h3 className='text-xl font-semibold'>
                                Full Stack Development
                            </h3>
                            <p className="text-muted-foreground">
                                Creating web applications with MERN and PERN stacks through personal projects and hands-on practice.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className='card-hover border-primary/20'>
                        <CardContent className='pt-6 text-center space-y-4'>
                            <div className='w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center'>
                                <Database className='w-8 h-8 text-primary' />
                            </div>
                            <h3 className='text-xl font-semibold'>
                                Data Engineering
                            </h3>
                            <p className="text-muted-foreground">
                                5 years of experience in SQL, ETL processes, and database optimization
                            </p>
                        </CardContent>
                    </Card>

                    <Card className='card-hover border-primary/20'>
                        <CardContent className='pt-6 text-center space-y-4'>
                            <div className='w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center'>
                                <LineChart className='w-8 h-8 text-primary' />
                            </div>
                            <h3 className='text-xl font-semibold'>
                                Business Intelligence
                            </h3>
                            <p className="text-muted-foreground">
                                Expertise in Power BI, data visualization, and analytical reporting
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className='max-w-4xl mx-auto space-y-6'>
                    <Card >
                        <CardContent className='pt-6'>
                            <p className='text-lg leading-relaxed text-muted-foreground'>
                                I have a professional background as a BI Developer, where I worked with SQL, Power BI,
                                ETL processes, and data reporting in real business environments. This experience helped me
                                develop a strong understanding of data, system logic, and how software supports business needs.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                Over the past two years, I have been learning full stack web development and building personal projects
                                using the MERN and PERN stacks. I focus on React-based frontends, REST APIs, and working with databases,
                                applying my technical background to create clean and practical web applications.  </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default About
