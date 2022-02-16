const Title = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="mx-auto mb-10 text-center max-w-max">
      <h2 className="text-5xl font-bold font-montserrat">{children}</h2>
      <div className="w-full h-5 -mt-5 bg-pastel-yellow"></div>
    </div>
  );
};

export default Title;
