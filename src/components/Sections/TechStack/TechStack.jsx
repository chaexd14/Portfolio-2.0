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
      <section className="h-fit w-[100%] flex flex-col justify-center items-center p-12 gap-8 border border-red-400 desktop:w-[80%]">
        <div className="flex items-center justify-between w-full border border-red-400 desktop:px-20">
          <div className="flex items-center justify-center border border-red-400 w-fit">
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
            href="/tech-stack"
            className="inline-block font-sans text-xs text-[#D9D9D9] w-fit text-right border border-red-400 desktop:text-xl">
            View All{' '}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="w-3 h-3 desktop:w-5 desktop:h-5"
            />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-10 border border-red-400 desktop:flex-row desktop:gap-20">
          <div className="h-full w-full text-sm text-center text-[#D9D9D9] border border-red-400 desktop:text-2xl desktop:text-justify">
            <BlurText
              text="Showcases the programming languages, frameworks, tools, and technologies I use in my development journey."
              delay={50}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </div>
          <div className="w-full h-full overflow-hidden border border-red-400">
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
