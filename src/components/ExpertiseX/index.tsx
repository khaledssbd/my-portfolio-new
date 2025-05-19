'use client';

import { Sparkle } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const ExpertiseX = ({ expertise }: { expertise: string[] }) => {
  expertise = [
    ...expertise,
    'Full-Stack Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Responsive Web Design',
    'REST API Integration',
  ];

  return (
    <div className="relative w-full h-52 md:h-72 overflow-hidden bg-black">
      {/* Marquee 1 ↘ goes top-left to bottom-right */}

      <Marquee
        autoFill
        pauseOnClick
        pauseOnHover
        speed={40}
        className="absolute -rotate-6 flex justify-around items-center gap-6 whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-gradient-to-l from-violet-600 via-blue-500 to-blue-900"
      >
        {expertise.map((item, index) => (
          <span
            key={`line1-${index}`}
            className="text-lg font-bold text-white pr-6 py-1 flex items-center justify-center gap-6"
          >
            {item}
            <Sparkle />
          </span>
        ))}
      </Marquee>

      {/* Marquee 2 ↙ goes top-right to bottom-left */}

      <Marquee
        autoFill
        pauseOnClick
        pauseOnHover
        speed={40}
        direction="right"
        className="absolute rotate-6 flex justify-around items-center gap-6 whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-gradient-to-r from-violet-600 via-blue-500 to-blue-900"
      >
        {expertise.map((item, index) => (
          <div
            key={`line2-${index}`}
            className="text-lg font-bold text-white pr-6 py-1 flex items-center justify-center gap-6"
          >
            {item} <Sparkle />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ExpertiseX;
