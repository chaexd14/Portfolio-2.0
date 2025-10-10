import { cn } from '../../../lib/utils.js';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  items = [],
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      setDirection();
      setSpeed();
      setStart(true);
    }
  }

  const setDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse'
      );
    }
  };

  const setSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s';
      containerRef.current.style.setProperty('--animation-duration', duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-12 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}>
        {items.map((item) => (
          <li
            key={item.id}
            className="aspect-square w-[70px] flex flex-col justify-evenly items-center bg-[#1A1A1A] border-2 border-[#2C303B] rounded-lg desktop:w-[90px]">
            <img
              src={item.icon}
              className="object-contain w-1/3 h-auto desktop:w-[40%]"
            />
            <p className="text-[#D9D9D9] text-xs text-center break-words desktop:text-base">
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
