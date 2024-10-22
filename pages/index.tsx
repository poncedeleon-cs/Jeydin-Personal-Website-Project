import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Header from "@/components/layout/Header";
import Projects from "@/components/sections/Projects";
import MainLayout from "@/components/layout/MainLayout";

import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { FaX } from 'react-icons/fa6';
import Link from 'next/link';

export default function Landing() {
  const [cookies, setCookie] = useCookies(['theme']);
  const [theme, setTheme] = useState(cookies.theme || 'dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setCookie('theme', theme, { sameSite: 'lax' });
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme = theme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <MainLayout>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />

      {/* Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setMobileMenuOpen(false)}></div>
      )}

      {/* Mobile menu */}
      <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-gray-800 shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="text-white absolute top-4 right-4 hover:text-green-500 focus:outline-none"
        >
          <FaX className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-start p-6 text-white space-y-4 font-extrabold">
          <Link href="" className="hover:text-green-500 text-lg" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="#about" className="hover:text-green-500 text-lg" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="#experience" className="hover:text-green-500 text-lg" onClick={() => setMobileMenuOpen(false)}>Experience</Link>
          <Link href="#skills" className="hover:text-green-500 text-lg" onClick={() => setMobileMenuOpen(false)}>Skills</Link>
          <Link href="#projects" className="hover:text-green-500 text-lg" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          <Link href="#contact" className="hover:text-green-500 text-lg" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </MainLayout>
  );
}