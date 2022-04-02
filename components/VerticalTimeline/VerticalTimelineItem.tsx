import { BsBook } from 'react-icons/bs';

type VerticalTimelineItemProps = {
  isRight?: boolean;
  icon?: React.ReactNode | string;
  title: string;
  description?: string;
  date?: string;
};

const VerticalTimelineItem = ({ isRight = false, icon, description, title, date }: VerticalTimelineItemProps) => {
  return (
    <div className="mt-6 sm:mt-0 sm:mb-12">
      <div className={`flex flex-col items-center  ${isRight ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
        <div className={`flex items-center ${!isRight ? 'justify-start' : 'justify-end'} w-full mx-auto`}>
          <div className={`w-full ${!isRight ? 'sm:pr-8' : 'sm:pl-8'}`}>
            <div className="p-4 bg-white border rounded shadow">
              <h4 className="text-lg text-pastel-blue">{title}</h4>
              {description && <p className="mt-3 text-gray-500">{description}</p>}
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center w-8 h-8 font-medium text-white transform -translate-x-1/2 -translate-y-4 border-4 border-white rounded-full bg-pastel-blue left-1/2 sm:translate-y-0">
          {icon}
        </div>
        <div className={`flex items-center ${isRight ? 'justify-start' : 'justify-end'} w-full mx-auto`}>
          <div className={`w-full sm:w-full ${isRight ? 'sm:pr-8' : 'sm:pl-8'}`}>
            <h5 className={`sm:py-0 py-4 text-left ${isRight ? 'sm:text-right' : ''} rounded`}>{date}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalTimelineItem;
