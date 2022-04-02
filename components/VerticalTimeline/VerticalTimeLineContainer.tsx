type VerticalTimeLineContainerProps = {
  children: React.ReactNode;
};

const VerticalTimeLineContainer = (props: VerticalTimeLineContainerProps): JSX.Element => {
  return (
    <div className="flex flex-col justify-center py-6 sm:py-12">
      <div className="relative text-sm antialiased font-semibold text-gray-700">
        <div className="absolute hidden w-1 h-full transform -translate-x-1/2 bg-gray-200 sm:block left-1/2" />
        <div className="w-full px-2 py-3 sm:max-w-full sm:mx-auto sm:px-0">{props.children}</div>
      </div>
    </div>
  );
};

export default VerticalTimeLineContainer;
