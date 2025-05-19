import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
// import Certificates from '@/components/Projects/Certificates';
import Skills from '@/components/Skills';
import { getAllProjects } from '@/services/project';
// import { getAllExperiences } from '@/services/experience';
// import Experience from '@/components/Experience';
import { getAllSkills } from '@/services/skill';

const Home = async () => {
  const { data: skills } = await getAllSkills();
  // const { data: experiences } = await getAllExperiences();
  const { data: projects } = await getAllProjects();
  return (
    <div className="min-h-screen">
      <Hero />

      <About />

      <Skills skills={skills} />

      {/* <Experience /> */}

      {/* <Certificates /> */}

      <Projects projects={projects} />

      <Contact />

      {/* https://magicui.design/docs/components/orbiting-circles */}
    </div>
  );
};

export default Home;
