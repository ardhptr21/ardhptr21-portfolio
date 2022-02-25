const Flying = ({ children, isLeft }: { children?: React.ReactNode; isLeft: boolean }) => {
  return (
    <div
      className={`fixed bottom-0 hidden md:flex flex-col items-center justify-center gap-5 z-10 ${
        isLeft ? 'left-16' : 'right-16'
      } after:bg-black after:h-24 after:block after:w-1`}
    >
      {children}
    </div>
  );
};

export default Flying;
