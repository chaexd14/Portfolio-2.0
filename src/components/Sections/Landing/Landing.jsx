'use client';
import React, { useEffect, useState } from 'react';
import Squares from '@/components/Ui/Squares/Squares';
import Magnet from '@/components/Ui/Magnet/Magnet';
import TrueFocus from '@/components/Ui/TrueFocus/TrueFocus';
import SplitText from '@/components/Ui/SplitText/SplitText';
import Lanyard from '@/components/Ui/Lanyard/Lanyard';
import ShinyText from '@/components/Ui/ShinyText/ShinyText';
import { IconAnimation } from '@/components/Ui/IconAnimation/iconAnimation';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Landing() {
  // Log check for animation
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  // Resize state for lanyard
  const [groupPosition, setGroupPosition] = useState([0, 0, 13]);

  // Resize state
  useEffect(() => {
    const updatePosition = () => {
      const isMobile = window.innerWidth < 1024;
      setGroupPosition(isMobile ? [0, 0, 9] : [0, 0, 13]);
    };

    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  return (
    <>
      {/* Background */}
      <div className="absolute w-full h-full">
        <Squares
          speed={0.3}
          squareSize={50}
          direction="diagonal"
          borderColor="#2C303B"
          hoverFillColor="#222"
        />
      </div>

      {/* Hero */}
      <section className="min-h-screen w-full grid grid-cols-1 grid-rows-3 gap-0 lg:flex lg:items-center lg:w-[80%]">
        <div className="flex-1 flex justify-start items-center w-full h-full flex-col gap-4 row-span-2 col-start-1 row-start-2 pt-[20%] lg:pt-0 lg:row-start-1 lg:items-start lg:justify-center lg:pl-24 2xl:pl-36">
          <div className="flex gap-4">
            <SplitText
              text="Hi, Im"
              className="text-5xl font-bold text-white customFont xl:text-8xl 2xl:text-9xl"
              delay={100}
              duration={0.6}
              repeatDelay={10}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <SplitText
              text="King Amato"
              className="customFont text-[#3B82F6] text-5xl font-bold xl:text-8xl 2xl:text-9xl"
              delay={100}
              duration={0.6}
              repeatDelay={10}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}>
            <TrueFocus
              sentence="Aspiring Full Stack Developer"
              manualMode={false}
              blurAmount={3}
              borderColor="#3B82F6"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            className="z-40 flex items-center justify-center gap-1">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#3B82F6] text-2xl animate-bounce-slow"
            />
            <ShinyText
              text="Philippines"
              disabled={false}
              speed={3}
              className="text-2xl font-semibold text-[#E0E0E0]"
            />
          </motion.div>
          <div className="z-40 mt-4">
            <ul className="flex gap-5 text-white lg:gap-8">
              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <motion.div {...IconAnimation(0.5, true)}>
                  <a
                    href="https://www.linkedin.com/in/king-amato-02250a347/"
                    target="_blank"
                    className="icons">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </motion.div>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <motion.div {...IconAnimation(1, true)}>
                  <a
                    href="https://github.com/chaexd14"
                    target="_blank"
                    className="icons">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </motion.div>
              </motion.li>
              <Magnet padding={50} disabled={false} magnetStrength={3.5}>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}>
                  <a href="/Resume.pdf" download className="normal-button">
                    Resume
                  </a>
                </motion.li>
              </Magnet>
            </ul>
          </div>
        </div>
        <section className="w-full h-full col-start-1 row-start-1 lg:absolute z-[40]">
          <Lanyard position={groupPosition} gravity={[0, -60, 0]} />
        </section>
      </section>
    </>
  );
}

export default Landing;
