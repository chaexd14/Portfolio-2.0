'use client';
import NavBar from '@/components/NavBar/NavBar';
import Landing from '@/components/Sections/Landing/Landing';
import About from '@/components/Sections/About/About';
import TechStack from '@/components/Sections/TechStack/TechStack';
import Projects from '@/components/Sections/Projects/Projects';
import Contact from '@/components/Sections/Contact/Contact';
import { useRef } from 'react';

export default function Home() {
  // Section ref for pages
  const sectionRefs = {
    hero: useRef(),
    about: useRef(),
    projects: useRef(),
    contacts: useRef(),
  };

  return (
    <>
      <main className="min-h-screen w-full bg-[#0C0C0C]">
        <header className="fixed h-full w-full pb-6 z-[70] lg:h-fit lg:pt-6 pointer-events-none">
          <nav className="h-full w-full flex items-end justify-center lg:items-center lg:h-[80px] z-[999]">
            <NavBar sectionRefs={sectionRefs} />
          </nav>
        </header>

        {/* Landing */}
        <section ref={sectionRefs.hero}>
          <Landing />
        </section>

        {/* About */}
        <section
          className="h-fit w-full flex items-center justify-center bg-[#121212] border-t border-b border-[#B7B5C2]"
          ref={sectionRefs.about}>
          <About />
        </section>

        {/* Stack */}
        <section className="flex items-center justify-center w-full h-fit">
          <TechStack />
        </section>

        {/* Projects */}
        <section
          className="px-12 lg:px-[100px] z-[999]"
          ref={sectionRefs.projects}>
          <Projects />
        </section>

        {/* Contact */}
        <section
          className="bg-[#121212] border-t border-b border-[#B7B5C2] z-[99] px-12 lg:px-[100px]"
          ref={sectionRefs.contacts}>
          <Contact />
        </section>
      </main>
    </>
  );
}
