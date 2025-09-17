import AnimatedTitle from '@/components/Ui/AnimatedTitle/animatedtitle';
import { ImgSlider } from '@/components/Ui/ImgSlider/imgslider';
import BlurText from '@/components/Ui/BlurText/BlurText';

function About() {
  // Log check for animation
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  // Image showcase
  const testimonials = [
    { src: '/images/me.jpg' },
    { src: '/images/me1.jpg' },
    { src: '/images/me2.jpg' },
  ];

  return (
    <>
      {/* About */}
      <section
        className="h-fit w-[100%] flex flex-col gap-10 xl:w-[90%] 2xl:w-[75%] lg:gap-6 px-12 py-20 lg:py-16 lg:px-[0px] border border-red-400"
        id="about">
        <div className="flex items-center justify-center">
          <AnimatedTitle
            text="CTRL +"
            className="font-semibold text-center text-white customFont text-7xl lg:text-left"
          />

          <AnimatedTitle
            text=" Me"
            className="customFont text-[#3B82F6] text-7xl text-center lg:text-left font-semibold"
          />
        </div>

        <div className="flex flex-col items-center gap-14 lg:gap-14 lg:flex-row">
          <div className="h-full min-w-[300px] lg:min-w-[390px]">
            <ImgSlider testimonials={testimonials} autoplay={true} />
          </div>
          <div className="h-full w-full flex flex-col justify-center gap-8 text-base text-center lg:gap-16 lg:text-[20px] text-[#D9D9D9] lg:text-justify">
            <BlurText
              text="I'm a 2nd-year IT student at Rizal Technological University who enjoys coding and problem solving as I work toward becoming a Full Stack Developer."
              delay={80}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />

            <BlurText
              text="When I’m not working on tech projects, you’ll find me Gaming, Drawing, Crafting or riding my Motorcycle as I blend creativity with code to make a difference."
              delay={80}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
