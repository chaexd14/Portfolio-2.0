'use client';
import NavBar from '@/components/NavBar/NavBar';
import Landing from '@/components/Sections/Landing/Landing';
import About from '@/components/Sections/About/About';
import TechStack from '@/components/Sections/TechStack/TechStack';
import { useEffect, useRef, useState } from 'react';

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

        <section ref={sectionRefs.hero}>
          <Landing />
        </section>

        <section
          className="h-fit w-full flex items-center justify-center bg-[#121212] border-t border-b border-[#B7B5C2]"
          ref={sectionRefs.about}>
          <About />
        </section>

        <section className="flex items-center justify-center w-full h-fit">
          <TechStack />
        </section>
      </main>
    </>
  );
}
