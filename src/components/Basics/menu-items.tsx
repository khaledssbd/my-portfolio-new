import { motion } from 'framer-motion';
import React from 'react';

const MenuItem = ({
  children,
  index,
  href,
  onClick,
}: {
  children: React.ReactNode;
  index: number;
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        delay: index * 0.1,
        duration: 0.3,
        ease: 'easeOut',
      }}
      className="relative overflow-hidden px-2 py-1 group"
    >
      <span className="text-[#fafafa]/80 hover:text-[#0ea5e9] transition-colors">
        {children}
      </span>

      {/* Animated Bottom Border */}
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full ease-in-out"></span>
    </motion.a>
  );
};

export default MenuItem;
