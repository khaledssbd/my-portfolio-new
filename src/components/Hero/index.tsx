'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import { scrollToSection } from '../Basics/navbar';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  // const router = useRouter();

  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="w-full h-full lg:w-1/2 relative"
            style={{ y }}
          >
            <div className="realtive w-full aspect-square group">
              {/* Animated Border */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'mirror',
                }}
                className="absoulte inset-0 rounded-3xl
                                    bg-gradient-to-r from-[#0ea5e9]/30
                                via-[#8b5cf6]/30 to-[#ec4899]/30
                                 opacity-50"
              />
              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="realtive w-full aspect-square 
                                rounded-3xl overflow-hidden
                                border border-white/10 bg-[#1a1a1a] 
                                backdrop-blur-sm"
              >
                <Image
                  src="/portfolio.png"
                  alt="Khaled Siddique"
                  fill
                  className="object-cover scale-110 group-hover:scale-100
                                            transition-transform duration-500"
                />
                <div
                  className="absoulte inset-0 bg-gradient-to-t
                                        from-black/60 to-transparent"
                />

                {/* <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.6,
                  }}
                  className="absolute bottom-8 left-8"
                >
                  <div className="text-2xl font-bold text-[#fafafa]">
                    Based in
                    <motion.span
                      className="block bg-gradient-to-r
                       from-[#0ea5e9] to-[#8b5cf6] bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'mirror',
                      }}
                      style={{
                        backgroundSize: '200% 200%',
                      }}
                    >
                      San Francisco, CA
                    </motion.span>
                  </div>
                </motion.div> */}
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative group lg:w-1/2 mt-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r
        from-[#0ea5e9] via-[#8b5cf6] to-[#ec4899] 
        bg-clip-text text-transparent mb-6"
            >
              Full Stack
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-[#0ea5e9] via-[#8b5cf6]
        to-[#ec4899] bg-clip-text text-transparent"
              >
                Developer
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-xl text-[#fafafa]/80 mb-8"
            >
              Speciliazing in Next.js React.js, Redux, Prisma, PostgreSQL,
              Mongoose, Node.js, Express.js, MongoDB, CSS, Tailwind CSS, Shadcn,
              Ant Design, and various tailwindCSS based UI. Building scalable
              application with modern tech stacks.
            </motion.p>

            <div className="flex flex-col md:flex-row justify-around items-center gap-4">
              <motion.button
                onClick={e =>
                  '#skills'.startsWith('#') && scrollToSection(e, '#skills')
                }
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="relative overflow-hidden px-8 py-4 rounded-full bg-[#1a1a1a] border
       border-white/10 hover:border-[#0ea5e9]/30 transition-all group"
              >
                <span className="text-[#fafafa] group-hover:text-[#0ea5e9] transition-colors">
                  Explore Skills
                </span>

                <div
                  className="absolute inset-0 bg-gradient-to-r 
        from-[#0ea5e9]/10 to-[#ec4899]/10 opacity-0
        group-hover:opacity-100 transition-opacity"
                />
              </motion.button>
              <Link
                href="https://drive.google.com/uc?export=download&id=1WNHsWWUy_aPhTqkisknTE75eGGhAknMj"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-12 w-2/3 md:w-60
          overflow-hidden rounded-lg p-[1px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                  className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2"
                >
                  Download Resume
                  <Icon icon="line-md:download-loop" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
