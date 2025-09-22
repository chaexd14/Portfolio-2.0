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
    visible: { transition: { staggerChildren: 0.5 } },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <>
      {/* Projects */}
      <section className="h-fit w-full flex flex-col items-center gap-14 py-20 lg:py-16 z-[999] border border-red-400">
        <div className="flex items-center justify-center w-full border border-red-400">
          <AnimatedTitle
            text="ALT +"
            className="text-6xl font-semibold text-center text-white customFont lg:text-7xl lg:text-left"
          />

          <AnimatedTitle
            text=" Builds"
            className="customFont text-[#3B82F6] text-6xl lg:text-7xl text-center lg:text-left font-semibold"
          />
        </div>

        <motion.div
          className="flex justify-center w-full border border-red-400"
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}>
          <div className="grid grid-cols-1 gap-12 border border-red-400 w-fit lg:grid-cols-4">
            {Projects_List.map((project) => (
              <motion.div
                className="group flex flex-col justify-end h-[350px] w-full lg:w-[280px] border-2 border-[#2C303B] rounded-xl overflow-hidden relative z-40 cursor-pointer hover:border-[#B7B5C2] transition-colors duration-300 ease-in-out "
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
                <motion.div className="z-10 h-[210px] flex flex-col justify-evenly px-7 pb-5 transition-all duration-300 ease-in-out group-hover:h-[220px]">
                  <div className="h-fit">
                    <h1 className="mb-2 text-xl font-semibold text-white">
                      {project.title}
                    </h1>
                    <p className="text-[#D9D9D9] mb-2 text-base">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="mb-2 text-base font-semibold text-white">
                      {project.subtitle}
                    </h2>
                    <ul className="flex flex-wrap max-w-[160px] gap-2">
                      {project.stack.map((stacks, index) => (
                        <li
                          className="h-fit bg-[#3B82F6] text-white text-[12px] px-3 py-[2px] rounded-xl"
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
