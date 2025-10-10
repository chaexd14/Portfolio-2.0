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
    { src: '/images/me.webp' },
    { src: '/images/me1.webp' },
    { src: '/images/me2.webp' },
  ];

  return (
    <>
      {/* About */}
      <section
        className="h-fit w-[100%] flex flex-col gap-10 p-12 border border-red-400 desktop:w-[85%]"
        id="about">
        <div className="flex items-center justify-center border border-red-400">
          <AnimatedTitle
            text="CTRL +"
            className="text-6xl font-semibold text-center text-white customFont desktop:text-7xl"
          />

          <AnimatedTitle
            text=" Me"
            className="customFont text-[#3B82F6] text-6xl text-center font-semibold desktop:text-7xl"
          />
        </div>

        <div className="flex flex-col items-center gap-10 border border-red-400 desktop:flex-row desktop:gap-20">
          <div className="h-full min-w-[250px] border border-red-400 desktop:min-w-[350px]">
            <ImgSlider testimonials={testimonials} autoplay={true} />
          </div>
          <div className="h-full w-full flex flex-col gap-8 text-sm text-center leading-relaxed text-[#D9D9D9] border border-red-400 desktop:text-xl desktop:text-justify">
            <BlurText
              text="I'm a 2nd-year IT student at Rizal Technological University who enjoys coding and problem-solving as I work toward becoming a Full Stack Web Developer. I am focused on developing my technical skills and gaining practical experience to prepare for a professional career in Web Development."
              delay={50}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />

            <BlurText
              text="When I’m not working on tech projects, you’ll find me Gaming, Drawing, Crafting or riding my Motorcycle as I blend creativity with code to make a difference."
              delay={50}
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
