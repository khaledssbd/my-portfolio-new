'use client';

import {
  myLinkedinURL,
  myFacebookURL,
  myWhatsAppURL,
  myXURL,
  myInstagramURL,
  myEmail,
} from '@/constants';
// import { motion } from 'framer-motion';
import { Linkedin, Facebook, X, Instagram, Check, Mail } from 'lucide-react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { toast } from 'sonner';

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setEmailCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const navLinks = [
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    // { name: 'Experience', path: '#experiences' },
    { name: 'Contact', path: '#contact' },
    { name: 'Blogs', path: '/blogs' },
  ];

  const socialLinks = [
    { href: myLinkedinURL, icon: Linkedin },
    { href: myFacebookURL, icon: Facebook },
    {
      href: myWhatsAppURL,
      icon: (props: any) => <Icon icon="ri:whatsapp-line" {...props} />,
    },
    { href: myXURL, icon: X },
    { href: myInstagramURL, icon: Instagram },
  ];

  return (
    <footer className="border-t border-gray-200 pt-10 pb-5 mt-10 bg-gradient-to-b from-transparent to-gray-900/10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Logo Section */}
        {/* <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#ec4899] animate-spin-slow [mask-image:linear-gradient(transparent,white)]" />
              <div className="absolute inset-[2px] bg-[#0a0a0a] rounded-full flex items-center justify-center">
                <span className="font-bold bg-gradient-to-r from-[#0ea5e9] to-[#ec4899] bg-clip-text text-transparent">
                  KS
                </span>
              </div>
            </div>
            <span className="font-semibold text-[#fafafa]/90 group-hover:text-[#0ea5e9] transition-colors">
              Khaled Siddique
            </span>
          </motion.div>
        </Link> */}

        {/* <hr /> */}
        {/* nav Links */}
        <ul className="grid grid-cols-3 sm:grid-cols-4 gap-3 text-sm text-white font-medium mb-8">
          {navLinks.map(({ name, path }, idx) => (
            <li key={idx}>
              <Link
                href={path}
                className="hover:text-blue-600 hover:font-bold transition-colors duration-200"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Email Copy Section */}
        <div className="mb-8">
          <div
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 cursor-pointer group"
          >
            {emailCopied ? (
              <Check className="w-5 h-5 text-green-400" />
            ) : (
              <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
            )}
            <span className="text-gray-300 group-hover:text-white font-medium flex items-center gap-2">
              {emailCopied ? (
                'Copied!'
              ) : (
                <>
                  {myEmail}
                  <Icon
                    icon="solar:copy-linear"
                    className="w-5 h-5 text-gray-300 group-hover:text-white"
                  />
                </>
              )}
            </span>
          </div>
        </div>

        {/* social Links */}
        {/* <div className="flex justify-center space-x-4">
          {socialLinks.map(({ href, icon: Icon }, index) => (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="text-gray-600 hover:text-purple-600"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div> */}

        <div className="flex justify-center space-x-4 mt-6">
          {socialLinks.map(({ href, icon: Icon }, index) => (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 transition-all duration-300 ease-in-out transform hover:bg-white hover:scale-110 hover:border hover:border-white cursor-pointer shadow-lg hover:shadow-blue-500/30"
            >
              <Icon className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors duration-300 ease-in-out" />
            </Link>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8">
          <p className="text-sm text-center text-gray-400">
            ©{new Date().getFullYear()} Created with{' '}
            <span className="text-red-500">♥</span> by Khaled
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
