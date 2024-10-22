import Link from 'next/link';
import { FaDownload, FaSun, FaMoon } from 'react-icons/fa6';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleTheme: () => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen, toggleTheme }: HeaderProps) {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-700 bg-opacity-90 text-white shadow-xl rounded-full py-3 px-5 z-30 w-[85%] max-w-8xl backdrop-blur-sm">
      <div className="flex justify-between items-center">
        {/* Left section (Logo and name) */}
        <div className="flex items-center space-x-2">
          <img
            src="/favicon.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-extrabold">Jeydin21</span>
        </div>

        {/* Right section (Links, CV button, and Language button) */}
        <div className="flex items-center space-x-3">
          {/* Navigation links */}
          <div className="hidden lg:flex space-x-6 font-extrabold">
            <Link href="" title='Home' className="hover:text-green-500">Home</Link>
            <Link href="#about" title='About' className="hover:text-green-500">About</Link>
            <Link href="#experience" title='Experience' className="hover:text-green-500">Experience</Link>
            <Link href="#skills" title='Skills' className="hover:text-green-500">Skills</Link>
            <Link href="#projects" title='Projects' className="hover:text-green-500">Projects</Link>
            <Link href="#contact" title='Contact' className="hover:text-green-500">Contact</Link>
          </div>

          {/* CV Download button */}
          <a
            className='flex flex-row transition-all duration-300 items-center border-2 border-green-500 hover:bg-green-500 bg-gray-800/95 text-white px-4 py-2 rounded-full'
            href="/Jeydin-Pham.pdf"
            download
            title='Download CV'
          >
            <p className="hidden lg:block">Download CV</p>
            <span className='lg:ml-1'><i><FaDownload /></i></span>
          </a>

          {/* Theme toggle button */}
          <button onClick={toggleTheme} title='Toggle theme' className="transition-all p-3 bg-gray-800 hover:bg-gray-500 rounded-full">
            <span>
              <i className='w-5 h-5 dark:hidden'>
                <FaSun />
              </i>
              <i className='w-5 h-5 hidden dark:inline'>
                <FaMoon />
              </i>
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}