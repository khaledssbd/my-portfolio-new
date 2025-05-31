'use client';

import { Icon } from '@iconify/react';
import { Button } from '../ui/button';

const About = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="about"
      className="p-10 md:p-32 text-center mt-7 space-y-6 text-white"
    >
      <h3 className="text-3xl md:text-4xl text-gray-300 font-semibold">
        About me
      </h3>
      <h3 className="text-base md:text-lg font-light text-justify">
        I&apos;m Khaled Siddique, a highly motivated Web Developer with a
        passion for crafting beautiful and functional UIs. Having recently
        completed courses in MERN Stack Web Development, and Next.js, I have a
        strong foundation in both front-end and back-end technologies. Skilled
        in MongoDB, Express.js, React.js, Node.js, Next.js, HTML, CSS, and
        JavaScript, I build user-centric web experiences that drive results.
        I&apos;m dedicated to creating remarkable websites and applications that
        are not only visually appealing but also user-friendly. I&apos;m excited
        to learn and adapt to the ever-evolving world of web development and
        committed to turning ideas into reality through code. Seeking to excel
        in Front-End development, I aim to deliver innovative solutions and make
        a significant impact in the industry.
      </h3>
      <h3 className="text-2xl md:text-5xl text-gray-300 font-semibold flex gap-3 pt-10">
        {/* <FaBookOpen className="text-accent" /> */}
        <Icon icon="noto:books" /> Education
      </h3>

      <div className="bg-[#0e2253] rounded-lg py-10 px-3 md:px-5 space-y-4">
        <div className="flex gap-5">
          <Icon icon="fxemoji:books" className="text-4xl" />
          <div>
            <h3 className="text-base md:text-lg text-start md:text-center">
              MASTER OF SOCIAL SCIENCE From Comilla University
            </h3>
            <h3 className="text-sm md:text-base text-start md:text-center text-gray-400">
              Field of study: Archaeology {'(2020)'}
            </h3>
          </div>
        </div>
        <div className="flex gap-5">
          <Icon icon="fxemoji:books" className="text-4xl" />
          <div>
            <h3 className="text-base md:text-lg text-start md:text-center">
              BACHELOR OF SOCIAL SCIENCE From Comilla University
            </h3>
            <h3 className="text-sm md:text-base text-start md:text-center text-gray-400">
              Field of study: Archaeology {'(2019)'}
            </h3>
          </div>
        </div>
        {/* <div className="text-4xl flex gap-5">
          <Icon icon="fxemoji:books" />
          <div>
            <h3 className="text-lg">
              HIGHER SECONDARY SCHOOL CERTIFICATE From Dhaka Board
            </h3>
            <h3 className="text-base">Field of study: Science {'(2015)'}</h3>
          </div>
        </div> */}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={() => handleScroll('contact')}
          className="relative h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2"
          >
            Contact me
            <Icon icon="tabler:location-filled" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default About;
