'use client'
import React from 'react'
import Label from './CommonComponent.tsx/Label'
import Image from 'next/image'
import Link from 'next/link'

const WhatWeDo = () => {

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="whatwedo" className=" bg-white sm:py-16 py-6 px-4 md:px-20 bg-[url('/shape-bg-about.png')] bg-no-repeat bg-right bg-contain ">
            <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div className='flex flex-col sm:justify-start justify-center'>
                    <Label label={'WHAT WE DO'}
                        position={'left'}
                    />
                    <h2 className="sm:text-6xl text-4xl sm:flex hidden font-bold mb-4 leading-tight">We Develop Products<br />That People Love To Use</h2>
                    <h2 className="text-4xl sm:hidden flex text-center font-bold mb-4 leading-tight">We Develop Products That People Love To Use</h2>
                    <div className="relative sm:hidden flex mb-5">
                        <Image src="/processImage.jpeg" width={600} height={400} alt="Our Team" className="rounded-xl shadow-lg w-full" />
                    </div>
                    <p className="text-gray-600 mb-8 sm:text-xl text-base  sm:text-start text-center">
                        Vibex is a trusted partner with a strong foundation in building modern web and mobile apps. We focus on excellence, performance, and user delight—locally and globally.
                    </p>

                    {/* Vision & Mission Boxes */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-10">
                        <div className="bg-gray-50 p-6 rounded-lg sm:text-start text-center">
                            <div className="text-purple-600 mb-3 text-3xl">👁️</div>
                            <h5 className="font-medium text-2xl mb-2">Our Vision</h5>
                            <p className="text-gray-500 text-base">To create innovative, user-first digital products that solve real-world problems.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg sm:text-start text-center">
                            <div className="text-purple-600 mb-3 text-3xl">🎯</div>
                            <h5 className="font-medium text-2xl mb-2">Our Mission</h5>
                            <p className="text-gray-500 text-base">Deliver high-quality web and app solutions with measurable impact for clients worldwide.</p>
                        </div>
                    </div>

                    {/* Button */}
                    <Link
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection("#contact")
                        }}
                        className="px-8 sm:mt-10 max-w-[200px] flex justify-center sm:mx-0 mx-auto sm:py-4 py-2 text-xl border border-[var(--primaryDarkGreen)] rounded-md bg-[var(--primaryDarkGreen)] hover:bg-white text-white hover:text-black transition-colors"
                    >
                        Contact Now
                    </Link>
                </div>

                {/* Right Image Block */}
                <div className="relative hidden sm:flex ">
                    <Image src="/processImage.jpeg" width={600} height={400} alt="Our Team" className="rounded-xl shadow-lg w-full" />
                </div>

            </div>
        </section>

    )
}

export default WhatWeDo