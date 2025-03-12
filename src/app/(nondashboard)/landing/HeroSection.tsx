"use client";
import Image from 'next/image'
import React from 'react'
import landing from "../../../../public/landing.jpg"
import {motion} from 'framer-motion'

const HeroSection = () => {
  return (
    <div className='relative h-screen'>
        <Image src={landing} alt="landing page" fill className='object-cover object-center ' priority/>
        <div className='absolute inset-0 bg-black/70'></div>
        
        {/* HeroSection */}

        <motion.div initial={{opacity :0 , y:20}}  animate={{opacity :1  , y:0}} transition={{duration :0.8}} className=" absolute top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        
        <div className="max-w-4xl mx-auto px-16 sm:px-12">

          <h1 className="text-5xl font-bold text-white mb-4">Welcome to Propertify The Real Estate Platform</h1>
        </div>
        </motion.div>
        </div>
  )
}

export default HeroSection