"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="relative py-24">
      <Image
        src="/landing-call-to-action.jpg"
        alt="Call to action"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl xl:max-w-6xl mx:auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12"
      >
        <div className="flex flex-col md:flex-row  justify-between items-center">
          <div className="mb-6 md:mb-0 md:mr-10">
            <h2 className="text-2xl font-bold text-white">
              MAKE YOU VISIT WORTHY
            </h2>
          </div>
          <div>
            <p className="text-white  font-bold mb-3 ">
              CHOOSE FROM A GREAT LIST OF PROPERTIES
            </p>

            <div className="flex justify-center md:justify-start gap-4">
             <button onClick={()=>{window.scrollTo({top:0 , behavior:"smooth"})}} className="inline-block text-primary-700 bg-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-500 hover:text-primary-50">Search</button>
              <Link
                href="/signup"
                className="px-6 py-3 text-white bg-secondary-500 rounded-lg text-center font-semibold hover:bg-secondary-600 flex items-center justify-center"
                scroll={false}
              >
                SIGNUP
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
