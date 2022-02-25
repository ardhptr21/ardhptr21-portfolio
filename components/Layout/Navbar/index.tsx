import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState, WheelEvent } from 'react';
import NavLink from './NavLink';

const Navbar = (): JSX.Element => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [isScrollUp, setIsScrollUp] = useState<boolean>(false);
  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollPosition) {
      setIsScrollUp(true);
    } else {
      setIsScrollUp(false);
    }
    setLastScrollPosition(window.scrollY);
  }, [lastScrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 flex items-center justify-between h-16 px-10 mx-8 bg-white border border-black select-none md:px-16 rounded-xl font-montserrat transform transition-transform duration-500 top-8 md:mx-28 lg:mx-48 ${
        isScrollUp ? '-translate-y-24' : ''
      }`}
      style={{ boxShadow: '0 0 100px #ccc' }}
    >
      <Link href="/">
        <a className="flex items-center justify-center gap-3">
          <p>
            <span className="inline-block text-5xl font-extrabold font-open-sans">A</span>
            <span className="inline-block ml-1 font-bold">rdhi</span>
          </p>
          <p>
            <span className="inline-block text-5xl font-extrabold font-open-sans">P</span>
            <span className="inline-block -ml-1 font-bold">utra</span>
          </p>
          {/* <Image src="/vercel.svg" alt="logo" layout="fill" /> */}
        </a>
      </Link>
      <button className="lg:hidden" onClick={() => setIsToggle(!isToggle)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <ul
        className={`absolute left-0 top-20 flex flex-col justify-center w-full lg:w-auto bg-white border border-black rounded-md lg:items-center lg:static lg:flex-row lg:bg-none lg:rounded-none lg:border-none transition duration-150 origin-top lg:scale-100 ${
          isToggle ? 'scale-100' : 'scale-y-0'
        }`}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Skill</NavLink>
        <NavLink to="/">Project</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
