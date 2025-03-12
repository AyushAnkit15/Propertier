"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import landing from "../../../../public/landing/landing.jpg";
import landing1 from "../../../../public/landing/landing1.jpg";
import landing2 from "../../../../public/landing/landing2.jpg";
import landing3 from "../../../../public/landing/landing3.jpg";
import landing4 from "../../../../public/landing/landing4.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const images = [landing, landing1, landing2, landing3, landing4];

const HeroSectionCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[index]}
            alt="landing page"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/70"></div>

      {/* HeroSection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
      >
        <div className="max-w-4xl mx-auto px-16 sm:px-12">
          <h1 className="text-5xl font-bold text-white mb-4 ">
            Welcome to Propertify The Real Estate Platform
          </h1>
          <p className="text-xl text-red-300 hover:text-gray-300 mb-6 ">
            CHECK OUT OUR LATEST PROPERTIES AND FIND YOUR DREAM STAY
          </p>

          <div className="flex justify-center">
            <Input
              type="text"
              value="SEARCH"
              onChange={() => {}}
              placeholder="Search"
              className="w-full max-w-lg  rounded-none rounded-l-xl border-none bg-white h-12"
            ></Input>
            <Button
              className=" rounded-none rounded-r-xl border-none text-white  bg-secondary-500  hover:bg-secondary-600 h-12"
              onClick={() => {}}
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSectionCarousel;
