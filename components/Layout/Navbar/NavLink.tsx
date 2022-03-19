import Link from 'next/link';
import React from 'react';

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }): JSX.Element => {
  return (
    <Link href={to} passHref>
      <li className="px-6 py-2 text-sm font-semibold text-gray-900 transition duration-300 border-transparent cursor-pointer lg:rounded-md lg:border-b-4 hover:bg-slate-100 hover:border-pastel-purple">
        <a>{children}</a>
      </li>
    </Link>
  );
};

export default NavLink;
