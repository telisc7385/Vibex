'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Label from './CommonComponent.tsx/Label'

const About = () => {
    const aboutRef = useRef(null)
    const aboutInViewRef = useRef(null)

    return (
        <section id="about" ref={aboutRef} className="w-full sm:py-10 py-6 container mx-auto">
            <div className=" px-4 md:px-6" ref={aboutInViewRef}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <Label label={'About Us'} />
                        <h2 className="text-3xl font-bold tracking-tighter md:text-6xl/tight">Meet The Team Behind Vibex DevDuo</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We're a duo of passionate developers with a combined experience in web and mobile
                            development.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid gap-12 sm:py-12 py-5 md:grid-cols-2">
                    {/* Team Member 1 - Suchit Teli */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative h-40 w-40 overflow-hidden rounded-full mb-6">
                            <Image
                                src="/profe.jpg" // Save the uploaded image as public/suchit-profile.png in your project
                                alt="Suchit Teli"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold">Suchit Teli</h3>
                        <p className="text-[var(--primaryDarkGreen)] mb-2">Software Developer</p>
                        <p className="text-muted-foreground mb-4 w-[80%] mx-auto">
                            Specializes in building modern web applications using Next.js, TypeScript, and Tailwind CSS, with solid experience in content management systems like WordPress. Focused on delivering fast, scalable, and user-friendly digital solutions.
                        </p>


                    </div>


                    {/* Team Member 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative h-40 w-40 overflow-hidden rounded-full mb-6">
                            <Image
                                src="/profe.jpg"
                                alt="Team Member 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold">Adarsh Salgudi</h3>
                        <p className="text-[var(--primaryDarkGreen)] mb-2">Software Developer</p>
                        <p className="text-muted-foreground mb-4 w-[80%] mx-auto">
                            Specializes in Flutter and Dart for cross-platform app development, with extensive experience in content management systems like WordPress and Shopify. Focused on delivering responsive, user-friendly digital experiences.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
