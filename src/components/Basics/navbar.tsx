'use client';

import {
  motion,
  // useScroll,
  // useMotionValueEvent
} from 'framer-motion';
// import { useState } from 'react';
import MenuItem from './menu-items';
import { GithubIcon, LinkedinIcon, XIcon, AlignRightIcon } from 'lucide-react';
import Link from 'next/link';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '../ui/button';
import { myGitHubURL, myLinkedinURL, myWhatsAppURL } from '@/constants';
import { Icon } from '@iconify/react';

const navItems = [
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#projects' },
  // { name: 'Experience', path: '#experiences' },
  { name: 'Contact', path: '#contact' },
  { name: 'Blogs', path: '/blogs' },
];

const socialLinks = {
  github: myGitHubURL,
  linkedin: myLinkedinURL,
  whatsApp: myWhatsAppURL,
};

export function scrollToSection(
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  sectionId: string
) {
  e.preventDefault();
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Navbar() {
  // const [isScrolled, setIsScrolled] = useState(false);
  // const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, 'change', latest => {
  //   setIsScrolled(latest > 50);
  // });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 backdrop-blur-2xl bg-gray-900/50 shadow-2xl shadow-[#0ea5e9]/10 transition-all duration-300 ease-out`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div
              className="flex items-center gap-6 bg-[#0a0a0a]/80 px-4 py-2 
            rounded-full border border-white/5 shadow-lg shadow-[#0ea5e9]/5"
            >
              {navItems.map(({ name, path }, i) => (
                <MenuItem
                  key={name}
                  index={i}
                  href={path}
                  onClick={e =>
                    path.startsWith('#') && scrollToSection(e, path)
                  }
                >
                  {name}
                </MenuItem>
              ))}
            </div>

            <div className="h-6 w-px bg-white/10 mx-2" />

            <div className="flex gap-3">
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#0ea5e9]/10 transition-colors group"
              >
                <GithubIcon className="h-5 w-5 text-[#fafafa]/80 group-hover:text-[#0ea5e9] transition-colors" />
              </Link>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#0ea5e9]/10 transition-colors group"
              >
                <LinkedinIcon className="h-5 w-5 text-[#fafafa]/80 group-hover:text-[#0ea5e9] transition-colors" />
              </Link>
              <Link
                href={socialLinks.whatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#0ea5e9]/10 transition-colors group"
              >
                <Icon
                  icon="ri:whatsapp-line"
                  className="h-5 w-5 text-[#fafafa]/80 group-hover:text-[#0ea5e9] transition-colors"
                />
              </Link>
            </div>
          </div>

          {/* <!-- Mobile Menu Navigation for Small Device--> */}
          <div className="inset-y-0 left-0 flex items-center md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#0ea5e9]/20 text-white transition-colors"
                >
                  <AlignRightIcon />
                </Button>
              </DrawerTrigger>

              <DrawerContent className="text-white bg-black border-t border-white/10">
                <div className="mx-auto w-full">
                  <DrawerHeader className="sr-only">
                    <DrawerTitle>Menu</DrawerTitle>
                    <DrawerDescription>Nav Items</DrawerDescription>
                  </DrawerHeader>

                  <div className="flex justify-end mr-2 mt-2">
                    <DrawerClose asChild>
                      <Button
                        variant="ghost"
                        className="p-2 rounded-lg bg-white/10 hover:bg-[#0ea5e9]/20 text-white transition-colors"
                      >
                        <XIcon />
                      </Button>
                    </DrawerClose>
                  </div>

                  <div className="p-4">
                    {/* NavItems for Small Device */}
                    <nav className="flex flex-col items-end gap-2">
                      {navItems.map(({ name, path }) => (
                        <DrawerClose asChild key={name}>
                          <Link
                            href={path}
                            onClick={e =>
                              path.startsWith('#') && scrollToSection(e, path)
                            }
                            className="px-4 py-2 rounded-md text-sm font-medium text-white hover:text-[#0ea5e9]"
                          >
                            {name}
                          </Link>
                        </DrawerClose>
                      ))}
                    </nav>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
