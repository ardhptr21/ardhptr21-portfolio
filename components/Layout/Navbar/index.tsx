import Image from 'next/image';
import { useState } from 'react';
import NavLink from './NavLink';

const Navbar = (): JSX.Element => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <nav
      className="fixed left-0 right-0 z-10 flex items-center justify-between h-16 px-10 mx-8 bg-white border border-black select-none md:px-16 rounded-xl font-montserrat top-8 md:mx-28 lg:mx-48"
      style={{ boxShadow: '0 0 100px #ccc' }}
    >
      <div className="relative w-24 h-full">
        <a href="">
          <Image src="/vercel.svg" alt="logo" layout="fill" />
        </a>
      </div>
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
