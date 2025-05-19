'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const Certificates = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
          entry.target.classList.remove('fade-down');
          entry.target.classList.remove('hiddenForFadeCSS');
        } else {
          entry.target.classList.remove('fade-up');
          entry.target.classList.add('fade-down');
        }
      });
    }, observerOptions);

    // Copy the current value of the ref to a variable
    const elements = elementsRef.current;

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const certificateData = [
    {
      name: 'Next Level Web Development',
      img: 'Khaled_Siddique_Next_Level-Web_Development_Course',
      url: 'https://web.programming-hero.com',
    },
    {
      name: 'Complete Web Development',
      img: 'Khaled_Siddique_Complete_Web_Development_Certificate',
      url: 'https://web.programming-hero.com',
    },
    {
      name: 'Digital Marketing With Google',
      img: 'Khaled_Siddique_Digital_Marketing_Certificate',
      url: 'https://grow.google/intl/uk',
    },
    {
      name: 'Digital Marketing With LEDP',
      img: 'Khaled_Siddique_LEDP_Certificate',
      url: 'http://ledp.ictd.gov.bd/new',
    },
    {
      name: 'SEO Strategies',
      img: 'Khaled_Siddique_SEO_Strategies_Certificate',
      url: 'https://olympus.mygreatlearning.com',
    },
    {
      name: 'TypeScript',
      img: 'Khaled_Siddique_TypeScript_Certificate',
      url: 'https://olympus.mygreatlearning.com',
    },
    {
      name: 'UI/UX',
      img: 'Khaled_Siddique_UI_UX_Certificate',
      url: 'https://olympus.mygreatlearning.com',
    },
  ];

  return (
    <div id="certificates" className="py-20 text-center">
      <h3 className="text-5xl text-white font-semibold py-20">Certificates</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        {certificateData?.map(({ name, img, url }, idx) => (
          <div
            key={idx}
            ref={el => {
              elementsRef.current[idx] = el;
            }}
            className="bg-[#151030] rounded-lg p-4 md:p-8 flex flex-col justify-center items-center"
          >
            <Image
              src={`/images/certificates/${img}.jpg`}
              alt={name}
              width={440}
              height={340}
              // layout="responsive" // Optional, for responsive images
              // quality={75} // Optional, to control image quality
            ></Image>
            <h3></h3>
            <Link
              href={url}
              className="text-base md:text-lg text-accent hover:text-red-500 pt-5"
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
