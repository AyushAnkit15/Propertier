import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="border-t border-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex  flex-col md:flex-row  justify-between items-center">
          <div className="mb-4">
            <Link href="/" className="text-xl font-bold" scroll={false}>
              PROPERTIFY
            </Link>
          </div>

          <nav className="mb-4">
            <ul className="flex space-x-6 font-bold">
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li>
                <Link href="/about">CONTACT</Link>
              </li>
              <li>
                <Link href="/about">FAQ</Link>
              </li>
              <li>
                <Link href="/about">TERMS AND CONDITIONS</Link>
              </li>
              <li>
                <Link href="/about">CAREER</Link>
              </li>
            </ul>
          </nav>

          <div className="flex space-x-4 mb-4">
            <a
              href="#"
              aria-label="INSTAGRAM"
              className="hover:text-primary-500"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="FACEBOOK"
              className="hover:text-primary-500"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </a>
            <a href="#" aria-label="GITHUB" className="hover:text-primary-500">
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="LINKEDIN"
              className="hover:text-primary-500"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
