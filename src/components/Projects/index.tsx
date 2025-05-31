import React from 'react';
import HoverScrollImage from '../HoverScrollImage';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { TProject } from '@/types';
import { myGitHubURL } from '@/constants';

const Projects = ({ projects }: { projects: TProject[] }) => {
  // const projects = [
  //   {
  //     title: 'UrbanUtopia',
  //     description:
  //       'UrbanUtopia is a single Building management project where user can sign agreement for an apartment and be a member. Then he/she can pay rent using Stripe payment method. Admin can add and update a coupon and members can use them to get a discount.',
  //     features:
  //       'stripe, react-leaflet, jspdf, jspdf-autotable, react-parallax, react-hook-form',
  //     image: 'urbanutopia-by-khaled.web.app.png',
  //     liveURL: 'https://urbanutopia-by-khaled.web.app',
  //     stacks: [
  //       'logos:firebase',
  //       'logos:react',
  //       'logos:mongodb-icon',
  //       'skill-icons:expressjs-light',
  //       'logos:nodejs-icon',
  //       'logos:stripe',
  //     ],
  //     frontEndGitHubURL:
  //       'https://github.com/khaledssbd/UrbanUtopia-project-client-side',
  //     backEndGitHubURL:
  //       'https://github.com/khaledssbd/UrbanUtopia-project-server-side',
  //   },
  //   {
  //     title: 'GlamSpot',
  //     description:
  //       'GlamSpot is a service based project where user can add his/her service and book others service on a specific date of his/her will. Also a user can check to-do list and update his/her service status.',
  //     features:
  //       'lottie-react, tanstack, animatecss, react-tooltip, jspdf, jspdf-autotable',
  //     image: 'glamspot-khaled.web.app.png',
  //     liveURL: 'https://glamspot-khaled.web.app',
  //     stacks: [
  //       'logos:react',
  //       'logos:mongodb-icon',
  //       'skill-icons:expressjs-light',
  //       'logos:nodejs-icon',
  //       'logos:git-icon',
  //       'mdi:github',
  //     ],
  //     frontEndGitHubURL:
  //       'https://github.com/khaledssbd/GlamSpot-project-client-side',
  //     backEndGitHubURL:
  //       'https://github.com/khaledssbd/GlamSpot-project-server-side',
  //   },
  //   {
  //     title: 'LuxHouses',
  //     description:
  //       'LuxHouses is a Real Estate based project where user can add his/her plot for sell and book others plot to buy. Every spot have the following information- Segment, Location, Description, Facilities, Area, Price etc.',
  //     features:
  //       'animate.css, aos, firebase, framer-motion, react-helmet-async, swiper',
  //     image: 'lux-houses.web.app.png',
  //     liveURL: 'https://lux-houses.web.app',
  //     stacks: [
  //       'vscode-icons:file-type-tailwind',
  //       'logos:daisyui-icon',
  //       'vscode-icons:file-type-firebase',
  //       'logos:react',
  //       'logos:material-ui',
  //     ],
  //     frontEndGitHubURL: 'https://github.com/khaledssbd/Lux-Houses-project',
  //   },
  //   {
  //     title: 'SA Tourism',
  //     description:
  //       'SA Tourism is a tourism based project where user can check for a spot in South Asia for his/her future tour. Here user can get a lot of details of an spot, such as Country, Location, Average Cost, Season for tour, Travel Time, Total Visitors Per Year etc.',
  //     features:
  //       'react-simple-typewriter, react-helmet-async, aos, framer-motion',
  //     image: 'sa-tourism-khaled.web.app.png',
  //     liveURL: 'https://sa-tourism-khaled.web.app',
  //     stacks: [
  //       'logos:daisyui-icon',
  //       'vscode-icons:file-type-firebase',
  //       'logos:react',
  //       'logos:mongodb-icon',
  //       'skill-icons:expressjs-light',
  //       'logos:nodejs-icon',
  //     ],
  //     frontEndGitHubURL:
  //       'https://github.com/khaledssbd/SA-Tourism-project-client-side',
  //     backEndGitHubURL:
  //       'https://github.com/khaledssbd/SA-Tourism-project-server-side',
  //   },
  // ];

  return (
    <div id="projects" className="py-10 md:py-20 text-center">
      <h3 className="text-3xl md:text-4xl text-gray-300 font-semibold pb-10 md:pb-20">
        Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-20">
        {projects?.map(
          ({
            title,
            description,
            features,
            image,
            liveURL,
            stacks,
            frontEndGitHubURL,
            backEndGitHubURL,
          }) => (
            <div
              key={liveURL}
              className="bg-[#151030] rounded-lg p-5 md:p-8 flex flex-col justify-center items-center"
            >
              {/* Image at the top */}
              <HoverScrollImage
                src={image}
                alt={title}
                width={800}
                height={1200}
              />

              <div className="bg-black text-white mt-6 w-full py-3 rounded-b-2xl z-10 flex flex-col flex-grow">
                {/* title */}
                <h3 className="text-2xl  font-bold pt-5">{title}</h3>
                {/* Description with flex-grow & overflow-y-auto */}
                <h3 className="text-base font-light text-justify px-5 py-3 flex-grow overflow-y-auto">
                  {description}
                </h3>
                {/* features */}
                <h3 className="text-base font-light text-justify px-5 py-3">
                  Features: {features}
                </h3>

                {/* stacks */}
                <div className="flex justify-center items-center gap-2">
                  {stacks?.map((stack: string) => (
                    <Icon icon={stack} key={stack} className="text-2xl" />
                  ))}
                </div>

                {/* liveURL */}
                {liveURL && (
                  <Link
                    href={liveURL}
                    className="text-white text-lg cursor-pointer gap-3 py-3 inline-flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Browse Live Site <Icon icon="tabler:location-filled" />
                  </Link>
                )}

                <div className="text-center">
                  {/* frontEndGitHubURL */}
                  {frontEndGitHubURL && (
                    <Link
                      href={frontEndGitHubURL}
                      className="text-white text-lg cursor-pointer flex items-center justify-center gap-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Client Side on <Icon icon="mdi:github" />
                    </Link>
                  )}

                  {/* backEndGitHubURL */}
                  {backEndGitHubURL && (
                    <Link
                      href={backEndGitHubURL}
                      className="text-white text-lg cursor-pointer flex items-center justify-center gap-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Server Side on <Icon icon="mdi:github" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* More Projects on GitHub */}
      <Link
        href={myGitHubURL}
        className="relative inline-flex h-12 w-2/3 md:w-60 mt-10
          overflow-hidden rounded-lg p-[1px] focus:outline-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2"
        >
          More Projects on GitHub
          <Icon icon="tabler:location-filled" />
        </span>
      </Link>
    </div>
  );
};

export default Projects;
