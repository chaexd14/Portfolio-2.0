import AnimatedTitle from '@/components/Ui/AnimatedTitle/animatedtitle';
import BlurText from '@/components/Ui/BlurText/BlurText';
import { InfiniteMovingCards } from '@/components/Ui/InfiniteMovingCards/infinite-moving-cards';

import { Tools1 } from '@/data/Tools1';
import { Tools2 } from '@/data/Tools2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

function TechStack() {
  // Log check for animation
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
      {/* Tech Stack */}
      <section className="h-fit w-[100%] flex flex-col justify-center items-center px-12 py-24 xl:w-[90%] 2xl:w-[80%] lg:px-[0px] gap-8 lg:gap-12 border border-red-400">
        <div className="flex items-center justify-between w-[100%]">
          <div className="flex justify-right">
            <AnimatedTitle
              text="SHIFT +"
              className="text-5xl font-semibold text-center text-white customFont lg:text-7xl lg:text-left"
            />

            <AnimatedTitle
              text=" STACK"
              className="customFont text-[#3B82F6] text-5xl lg:text-7xl text-center lg:text-left font-semibold"
            />
          </div>

          <Link
            href="/tech-stack"
            className="inline-block font-sans text-base text-[#D9D9D9] pr-10">
            View All <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col items-center w-full gap-6 lg:gap-32 lg:flex-row">
          <div className="h-full w-full text-base text-center lg:text-justify lg:gap-6 xl:text-[20px] text-[#D9D9D9]">
            <BlurText
              text="Showcases the programming languages, frameworks, tools, and technologies I use in my development journey."
              delay={80}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </div>
          <div className="w-full h-full overflow-hidden z-[60]">
            <InfiniteMovingCards
              items={Tools1}
              direction="right"
              speed="normal"
            />
            <InfiniteMovingCards
              items={Tools2}
              direction="left"
              speed="normal"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default TechStack;
