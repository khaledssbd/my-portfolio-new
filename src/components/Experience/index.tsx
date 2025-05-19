'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { expCards } from '../../constants';
import TitleHeader from './TitleHeader';
import GlowCard from './GlowCard';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray('.timeline-card').forEach(card => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card as Element, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: 'left left',
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: 'power2.inOut',
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card as Element,
          // Trigger the animation when the card is 80% down the screen
          start: 'top 80%',
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to('.timeline', {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: 'bottom bottom',
      // Animate the timeline height over 1 second
      ease: 'power1.inOut',
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        // Update the animation as the user scrolls
        onUpdate: self => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray('.expText').forEach(text => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text as Element, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: 'power2.inOut',
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text as Element,
          // Trigger the animation when the text is 60% down the screen
          start: 'top 60%',
        },
      });
    }, '<'); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section id="experiences" className="flex justify-center items-center py-20">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-30 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div
                key={card.title}
                className="flex flex-col-reverse xl:flex-row xl:gap-20 gap-10 justify-between"
              >
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <Image
                        src={card.imgPath}
                        alt="exp-img"
                        width={60}
                        height={60}
                      />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="absolute top-0 xl:left-[35.5vw] md:left-10 left-5 h-full flex justify-center">
                      <div className="absolute z-20 -top-10 w-14 md:w-28" />
                      <div className="w-1 h-full bg-[linear-gradient(0deg,_rgba(69,222,196,0)_0%,_#62e0ff_25%,_#52aeff_37.51%,_#fd5c79_62.83%,_#6d45ce_92.91%)]" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-10">
                      <div className="md:size-20 size-10 flex-none rounded-full flex justify-center items-center md:-translate-y-7 border border-black-50 bg-black-100">
                        <Image
                          src={card.logoPath}
                          alt="logo"
                          width={100}
                          height={100}
                          className="bg-black rounded-full"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl text-blue-500">
                          {card.title}
                        </h1>
                        <p className="my-5 text-[#d9ecff]">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-[#d9ecff]">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
