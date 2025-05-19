'use client';

import { TSkill } from '@/types';
import ExpertiseX from '../ExpertiseX';
import { Icon } from '@iconify/react';

// const techStacks = [
//   { name: 'HTML5', icon: 'catppuccin:html' },
//   { name: 'CSS3', icon: 'devicon:css3' },
//   { name: 'JavaScript', icon: 'js' },
//   { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript' },
//   { name: 'ReactJS', icon: 'vscode-icons:file-type-reactjs' },
//   { name: 'Redux', icon: 'skill-icons:redux' },
//   { name: 'NextJS', icon: 'skill-icons:nextjs-dark' },
//   { name: 'Tailwind CSS', icon: 'devicon:tailwindcss' },
//   { name: 'Framer Motion', icon: 'tabler:brand-framer-motion' },
//   { name: 'Shadcn', icon: 'simple-icons:shadcnui' },
//   { name: 'Ant Design', icon: 'devicon:ant-design' },
//   { name: 'NodeJS', icon: 'material-icon-theme:nodejs' },
//   { name: 'ExpressJS', icon: 'skill-icons:expressjs-dark' },
//   { name: 'Mongoose', icon: 'devicon:mongoose' },
//   { name: 'MongoDB', icon: 'devicon:mongodb' },
//   { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
//   //   { name: 'MySQL', icon: 'logos:mysql },
//   { name: 'PostgreSQL', icon: 'devicon:postgresql' },
//   { name: 'Prisma', icon: 'skill-icons:prisma' },
//   //   { name: 'Zustand', icon: 'devicon:zustand },
//   { name: 'Zod', icon: 'logos:zod' },
//   { name: 'Git', icon: 'material-icon-theme:git' },
//   { name: 'GitHub', icon: 'hugeicons:github' },
//   { name: 'Vercel', icon: 'skill-icons:vercel-light' },
//   { name: 'Postman', icon: 'devicon:postman' },
//   //   { name: 'Java', icon: 'devicon:java },
//   //   { name: 'Linux', icon: 'devicon:linux },
//   { name: 'yarn', icon: 'logos:yarn' },
//   { name: 'pnpm', icon: 'material-icon-theme:pnpm' },
// ];

const Skills = ({ skills }: { skills: TSkill[] }) => {
  const expertise = skills.map(tech => tech.name);

  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-400 uppercase tracking-widest mb-2">
          I constantly try to improve
        </p>
        <h2 className="text-4xl font-bold mb-10">My Skills</h2>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-0 md:px-4">
          {skills.map(({ name, icon }, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-full border border-neutral-700 hover:scale-105 hover:rotate-3 transition-transform"
            >
              <span className="text-sm: md:text-lg">
                <Icon icon={icon} />
              </span>
              <span className="text-sm: md:text-lg">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <ExpertiseX expertise={expertise} />
    </div>
  );
};

export default Skills;
