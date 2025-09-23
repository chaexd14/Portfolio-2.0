'use client';

import AnimatedTitle from '@/components/Ui/AnimatedTitle/animatedtitle';
import { FrontendTools } from '@/data/FrontendTools';
import { BackendTools } from '@/data/BackendTools';
import { DeveloperTools } from '@/data/DeveloperTools';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function ClientPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <section className="h-full w-full flex items-center flex-col px-10 py-12 lg:px-[100px] gap-8 lg:gap-1 bg-[#0C0C0C] border border-red-400">
      <div className="h-fit w-full lg:w-[90%] border border-red-400 flex flex-col items-center">
        <div className="flex items-center justify-between w-full border border-red-400 lg:mb-14">
          <div className="flex border border-red-400">
            <AnimatedTitle
              text="SHIFT +"
              className="text-4xl font-semibold text-center text-white customFont lg:text-7xl lg:text-left"
            />
            <AnimatedTitle
              text=" STACK"
              className="customFont text-[#3B82F6] text-4xl lg:text-7xl text-center lg:text-left font-semibold"
            />
          </div>
          <Link
            href="/"
            className="inline-block font-sans text-xs lg:text-base text-[#D9D9D9] lg:pr-10 border border-red-400">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="w-3 h-3 lg:w-4 lg:h-4"
            />{' '}
            Back to Home
          </Link>
        </div>

        <motion.div
          ref={ref}
          className="flex flex-col border border-red-400 gap-14 w-full lg:w-[90%]"
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}>
          {/* Frontend Section */}
          <motion.div
            className="w-[100%] flex flex-col gap-3 lg:gap-5 border border-red-400"
            variants={childVariant}>
            <h1 className="text-3xl text-white customFont">Frontend</h1>
            <ul className="flex flex-wrap items-center w-full gap-4 lg:gap-5 h-fit">
              {FrontendTools.map((item) => (
                <li
                  key={item.id}
                  className="h-fit w-fit flex flex-row justify-evenly items-center gap-2 bg-[#1A1A1A] border-2 border-[#2C303B] rounded-lg py-1 px-3 lg:py-2 lg:px-4">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={40}
                    height={40}
                    className="h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"
                  />
                  <p className="text-[#D9D9D9] text-sm text-center">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend Section */}
          <motion.div
            className="w-[100%] flex flex-col gap-3 lg:gap-5 border border-red-400"
            variants={childVariant}>
            <h1 className="text-3xl text-white customFont">Backend</h1>
            <ul className="flex flex-wrap items-center w-full gap-4 lg:gap-5 h-fit">
              {BackendTools.map((item) => (
                <li
                  key={item.id}
                  className="h-fit w-fit flex flex-row justify-evenly items-center gap-2 bg-[#1A1A1A] border-2 border-[#2C303B] rounded-lg py-1 px-3 lg:py-2 lg:px-4">
                  <img
                    src={item.icon}
                    className="h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"
                  />
                  <p className="text-[#D9D9D9] text-sm text-center">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Developer Tools Section */}
          <motion.div
            className="w-[100%] flex flex-col gap-3 lg:gap-5 border border-red-400"
            variants={childVariant}>
            <h1 className="text-3xl text-white customFont">Developer Tools</h1>
            <ul className="flex flex-wrap items-center w-full gap-4 lg:gap-5 h-fit">
              {DeveloperTools.map((item) => (
                <li
                  key={item.id}
                  className="h-fit w-fit flex flex-row justify-evenly items-center gap-2 bg-[#1A1A1A] border-2 border-[#2C303B] rounded-lg py-1 px-3 lg:py-2 lg:px-4">
                  <img
                    src={item.icon}
                    className="h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"
                  />
                  <p className="text-[#D9D9D9] text-sm text-center">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ClientPage;
