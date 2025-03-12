"use client";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const FeatureCard = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}: {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 , x: 10 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="text-center"
    >
      <div className="p-4 rounded-lg mb-4 flex items-center justify-center h-48">
        <Image
          src={imageSrc}
          alt="property image"
          width={400}
          height={400}
          className="w-full h-full  object-contain "
        />
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link
        className="inline  border border-gray-300  rounded px-4 py-2 hover:bg-gray-100"
        scroll={false}
        href={linkHref}
      >
        {linkText}
      </Link>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, duration: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white"
    >
      <div className="max-w-4xl xl:max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto"
        >
          FIND A STAY QUICKLY WITH OUR EFFICIENT SEARCH ENGINE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 lg:gap-12 xl:gap-16">
          {[0, 1, 2].map((index) => {
            return (
              <motion.div key={index} variants={itemVariants}>
                <FeatureCard
                  imageSrc={`/landing-search${3 - index}.png`}
                  title={
                    ["VERIFIERD", "RENTAL AND AFFORDABLE", "SIMPLE SEARCH"][
                      index
                    ]
                  }
                  description={
                    ["VERIFIERD", "RENTAL AND AFFORDABLE", "SIMPLE SEARCH"][
                      index
                    ]
                  }
                  linkText={["SEARCH", "FILTER", "VISIT"][index]}
                  linkHref={["/explore", "/search", "/discover"][index]}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
