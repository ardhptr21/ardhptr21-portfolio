import React, { DetailedHTMLProps, MouseEventHandler } from 'react';

const Button = ({
  children,
  onClick,
  type,
  className,
}: {
  children: React.ReactNode;
  onClick?: MouseEventHandler;
  type: DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['type'];
  className?: string;
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`inline-block px-6 py-3 font-semibold border-2 border-black rounded-md shadow-md transform hover:scale-110 transition-colors font-montserrat max-w-max ${
        className ? className : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
