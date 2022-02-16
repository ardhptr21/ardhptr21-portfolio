import React from 'react';

const Section = ({
  children,
  className,
  isPt = false,
}: {
  children: React.ReactNode;
  className?: string;
  isPt?: boolean;
}): JSX.Element => {
  return (
    <section className={`px-8 ${isPt ? 'pt-40' : ''} md:px-28 lg:px-48 ${className ? className : ''}`}>
      {children}
    </section>
  );
};

export default Section;
