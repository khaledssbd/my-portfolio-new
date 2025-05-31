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
    <div className="relative w-full h-44 md:h-64 overflow-hidden bg-black">
      {/* Marquee 1 ↘ goes top-left to bottom-right */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Marquee
          autoFill
          pauseOnClick
          pauseOnHover
          speed={40}
          direction="right"
          className="-rotate-6 flex justify-around items-center gap-3 md:gap-6 whitespace-nowrap w-full bg-gradient-to-l from-violet-600 via-blue-500 to-blue-900"
        >
          {expertise.map((item, index) => (
            <span
              key={`line1-${index}`}
              className="text-sm md:text-lg font-bold text-white pr-3 md:pr-6 py-1 flex items-center justify-center gap-3 md:gap-6"
            >
              {item}
              <Sparkle className="size-5 md:size-6" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* Marquee 2 ↙ goes top-right to bottom-left */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Marquee
          autoFill
          pauseOnClick
          pauseOnHover
          speed={40}
          className="rotate-6 flex justify-around items-center gap-3 md:gap-6 whitespace-nowrap w-full bg-gradient-to-r from-violet-600 via-blue-500 to-blue-900"
        >
          {expertise.map((item, index) => (
            <div
              key={`line2-${index}`}
              className="text-sm md:text-lg font-bold text-white pr-3 md:pr-6 py-1 flex items-center justify-center gap-3 md:gap-6"
            >
              {item}
              <Sparkle className="size-5 md:size-6" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ExpertiseX;
