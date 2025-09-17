'use client';
import { useEffect, useRef } from 'react';
import { motion, animate, stagger, useInView } from 'framer-motion';

const AnimatedTitle = ({ text, className = '' }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || !containerRef.current) return;

    containerRef.current.style.visibility = 'visible';

    const elements = containerRef.current.querySelectorAll('span.animate-char');

    animate(
      elements,
      { opacity: [0, 1], y: [10, 0] },
      {
        type: 'spring',
        duration: 2,
        bounce: 0.2,
        delay: stagger(0.03),
      }
    );
  }, [isInView]);

  return (
    <motion.h1
      ref={containerRef}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        visibility: 'hidden',
        whiteSpace: 'pre-wrap',
      }}>
      {[...text].map((char, index) => (
        <span
          key={index}
          className={char === ' ' ? '' : 'animate-char'}
          style={{
            opacity: 0,
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}>
          {char}
        </span>
      ))}
    </motion.h1>
  );
};

export default AnimatedTitle;
