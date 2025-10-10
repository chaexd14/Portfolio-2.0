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
    <section className="min-h-screen w-full flex items-center justify-center flex-col p-8 gap-8 bg-[#0C0C0C] border border-red-400">
      <div className="flex flex-col items-center w-full h-full gap-8 border border-red-400 desktop:w-[90%] desktop:gap-16">
        <div className="flex items-center justify-between w-full border border-red-400">
          <div className="flex border border-red-400">
            <AnimatedTitle
              text="SHIFT +"
              className="text-4xl font-semibold text-center text-white customFont desktop:text-7xl"
            />
            <AnimatedTitle
              text=" STACK"
              className="customFont text-[#3B82F6] text-4xl text-center font-semibold desktop:text-7xl"
            />
          </div>
          <Link
            href="/"
            className="inline-block font-sans text-xs lg:text-base text-[#D9D9D9] lg:pr-10 border border-red-400 desktop:text-xl">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="w-3 h-3 desktop:w-5 desktop:h-5"
            />{' '}
            Back Home
          </Link>
        </div>

        <motion.div
          ref={ref}
          className="flex flex-col w-full gap-8 border border-red-400 desktop:gap-14"
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}>
          {/* Frontend Section */}
          <motion.div
            className="w-[100%] flex flex-col gap-3 border border-red-400"
            variants={childVariant}>
            <h1 className="text-3xl text-white customFont desktop:text-4xl desktop:mb-3">
              Frontend
            </h1>
            <ul className="flex flex-wrap items-center w-full gap-4 h-fit desktop:gap-8">
              {FrontendTools.map((item) => (
                <li
                  key={item.id}
                  className="h-fit w-fit flex flex-row justify-evenly items-center gap-3 bg-[#1A1A1A] border-2 border-[#2C303B] rounded-lg py-1 px-3 desktop:py-3 desktop:px-5">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={40}
                    height={40}
                    className="h-[20px] w-[20px] desktop:h-[30px] desktop:w-[30px]"
                  />
                  <p className="text-[#D9D9D9] text-sm text-center desktop:text-base">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend Section */}
          <motion.div
            className="w-[100%] flex flex-col gap-3 border border-red-400"
            variants={childVariant}>
            <h1 className="text-3xl text-white customFont desktop:text-4xl desktop:mb-3">
              Backend
            </h1>
            <ul className="flex flex-wrap items-center w-full gap-4 h-fit desktop:gap-8">
              {BackendTools.map((item) => (
                <li
                  key={item.id}
                  className="h-fit w-fit flex flex-row justify-evenly items-center gap-3 bg-[#1A1A1A] border-2 border-[#2C303B] rounded-lg py-1 px-3 desktop:py-3 desktop:px-5">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={40}
                    height={40}
                    className="h-[20px] w-[20px] desktop:h-[30px] desktop:w-[30px]"
                  />
                  <p className="text-[#D9D9D9] text-sm text-center desktop:text-base">
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
            <h1 className="text-3xl text-white customFont desktop:text-4xl desktop:mb-3">
              Developer Tools
            </h1>
            <ul className="flex flex-wrap items-center w-full gap-4 h-fit desktop:gap-8">
              {DeveloperTools.map((item) => (
                <li
                  key={item.id}
                  className="h-fit w-fit flex flex-row justify-evenly items-center gap-3 bg-[#1A1A1A] border-2 border-[#2C303B] rounded-lg py-1 px-3 desktop:py-3 desktop:px-5">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={40}
                    height={40}
                    className="h-[20px] w-[20px] desktop:h-[30px] desktop:w-[30px]"
                  />
                  <p className="text-[#D9D9D9] text-sm text-center desktop:text-base">
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
