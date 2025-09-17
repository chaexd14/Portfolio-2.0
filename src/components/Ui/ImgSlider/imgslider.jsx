import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export const ImgSlider = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState([]);

  // Generate random rotations once, keeps hydration stable
  useEffect(() => {
    setRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
  }, [testimonials]);

  const handleNext = () =>
    setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="w-full px-8 py-8 font-sans antialiased md:px-8 lg:px-16">
      <div className="relative">
        <div className="relative h-[280px] lg:h-80">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: rotations[index] || 0, // use pre-generated rotation
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : rotations[index] || 0,
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: rotations[index] || 0,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0 origin-bottom">
                <img
                  src={testimonial.src}
                  alt=""
                  width={500}
                  height={500}
                  draggable={false}
                  className="object-cover object-center w-full h-full rounded-2xl"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
