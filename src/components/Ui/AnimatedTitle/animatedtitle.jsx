'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedTitle = ({ text, className = '' }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  // Variants for smooth + bouncy effect
  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: [20, -5, 2, 0], // small bounce keyframes
      transition: {
        delay: i * 0.04,
        duration: 0.8, // total time in seconds
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.h1
      ref={containerRef}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        whiteSpace: 'pre-wrap',
      }}>
      {[...text].map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={charVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedTitle;
