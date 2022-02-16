const NiceLink = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <span className="px-2 font-semibold transition duration-300 cursor-pointer hover:underline hover:text-pastel-blue text-pastel-green font-montserrat">
      {children}
    </span>
  );
};

export default NiceLink;
