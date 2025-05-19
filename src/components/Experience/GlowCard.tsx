'use client';

import Image from 'next/image';
import { useRef } from 'react';

import { ReactNode } from 'react';

type GlowCardProps = {
  card: { review: string };
  index: number;
  children?: ReactNode;
};

const GlowCard = ({ card, index, children }: GlowCardProps) => {
  // refs for all the cards
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove = (index: number) => (e: any) => {
    // get the current card
    const card = cardRefs.current[index];
    if (!card) return;

    // get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // calculate the angle from the center of the card to the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // adjust the angle so that it's between 0 and 360
    angle = (angle + 360) % 360;

    // set the angle as a CSS variable
    card.style.setProperty('--start', String(angle + 60));
  };

  // return the card component with the mouse move event
  return (
    <div
      ref={el => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <Image key={i} src="/images/star.png" alt="star" className="size-5" width={100} height={100} />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-[#d9ecff] text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
