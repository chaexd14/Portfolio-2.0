'use client';
import AnimatedTitle from '@/components/Ui/AnimatedTitle/animatedtitle';
import { motion, useInView } from 'framer-motion';
import { Projects_List } from '@/data/Projects';
import { useRef } from 'react';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.4 } },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  return (
    <>
      {/* Projects */}
      <section className="flex flex-col items-center justify-center w-full gap-10 p-12 border border-red-400 h-fit desktop:w-[90%]">
        <div className="flex items-center justify-center w-full border border-red-400">
          <AnimatedTitle
            text="ALT +"
            className="text-6xl font-semibold text-center text-white customFont desktop:text-7xl"
          />

          <AnimatedTitle
            text=" Builds"
            className="customFont text-[#3B82F6] text-6xl font-semibold text-center desktop:text-7xl"
          />
        </div>

        <motion.div
          className="flex justify-center w-full border border-red-400"
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}>
          <div className="grid grid-cols-1 gap-8 border border-red-400 w-fit desktop:grid-cols-4 desktop:gap-16">
            {Projects_List.map((project) => (
              <motion.div
                className="group flex flex-col justify-end h-[250px] w-full border-2 border-[#2C303B] rounded-xl overflow-hidden relative cursor-pointer hover:border-[#B7B5C2] transition-colors duration-300 ease-in-out desktop:h-[400px] desktop:w-[300px]"
                variants={childVariant}
                key={project.id}>
                <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
                  <img
                    src={project.background}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-[#1A1A1A]/70"></div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent to-[#131315]"></div>
                <motion.div className="z-10 h-[60%] flex flex-col justify-evenly p-5 transition-all duration-300 ease-in-out group-hover:h-[70%] border border-red-400">
                  <div className="mb-2 h-fit desktop:mb-4">
                    <h1 className="mb-2 text-xl font-semibold text-white desktop:text-xl">
                      {project.title}
                    </h1>
                    <p className="text-[#D9D9D9] text-sm border border-red-400 desktop:text-lg">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-col border border-red-400">
                    <h2 className="mb-2 text-sm font-semibold text-white desktop:text-xl">
                      {project.subtitle}
                    </h2>
                    <ul className="flex flex-wrap w-[100%] border border-red-400">
                      {project.stack.map((stacks, index) => (
                        <li
                          className="h-fit bg-[#3B82F6] text-white text-[12px] px-3 py-[2px] rounded-md mr-3 mb-2 desktop:text-sm"
                          key={index}>
                          {stacks}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Projects;
