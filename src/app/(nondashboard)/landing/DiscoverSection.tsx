"use client";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
// import Link from "next/link";

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: //   linkText,
//   linkHref,
{
  imageSrc: string;
  title: string;
  description: string;
  //   linkText: string;
  //   linkHref: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -10, x: 10 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="px-4 py-12 shadow-lg rounded-lg bg-primary-50 md: h-72"
    >
      <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
        <Image
          src={imageSrc}
          alt="property image"
          width={30}
          height={30}
          className="w-full h-full  "
        />
      </div>

      <h3 className="text-xl font-medium text-gray-800 mt-4 ">{title}</h3>
      <p className="mt-2 text-base text-gray-500 ">{description}</p>
      {/* <Link
        className="inline  border border-gray-300  rounded px-4 py-2 hover:bg-gray-100"
        scroll={false}
        href={linkHref}
      >
        {linkText}
      </Link> */}
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DiscoverSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
      className="py-12  bg-white mb-16"
    >
      <div className="max-w-6xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div variants={itemVariants} className="my-12 text-center">
          <h2 className="text-3xl font-semibold  leading-tight text-gray-800">
            DISCOVER
          </h2>

          <p className="mt-4 text-xl text-gray-600 ">
            Discover the best properties in the market!
          </p>

          <p className="mt-2 text-gray-500 max-w-3xl mx-auto">
            Find the best properties in the market, we have the best properties!
            in the market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 lg:gap-12 xl:gap-16 text-center">
          {[
            {
              imageSrc: "/landing-icon-wand.png",
              title: "SEARCH",
              description: "Search for the best properties in the market",
            },
            {
              imageSrc: "/landing-icon-calendar.png",
              title: "SEARCH",
              description: "Search for the best properties in the market",
            },
            {
              imageSrc: "/landing-icon-heart.png",
              title: "SEARCH",
              description: "Search for the best properties in the market",
            },
          ].map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DiscoverCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DiscoverSection;
