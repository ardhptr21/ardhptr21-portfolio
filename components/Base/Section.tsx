import React from 'react';

const Section = ({
  children,
  className,
  isPt = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  isPt?: boolean;
  id?: string;
}): JSX.Element => {
  return (
    <section className={`px-8 py-20 ${isPt ? 'pt-40' : ''} md:px-28 lg:px-48 ${className ? className : ''}`} id={id}>
      {children}
    </section>
  );
};

export default Section;
