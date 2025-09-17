export const IconAnimation = (delay = 0, repeat = true) => {
  return {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: repeat ? [1, 1.2, 1] : 1,
      transition: {
        duration: 0.4,
        delay: 0 + delay,
        ease: 'easeInOut',
        repeat: repeat ? Infinity : 0,
        repeatDelay: 10,
      },
    },
  };
};
