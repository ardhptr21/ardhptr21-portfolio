import { BaseSyntheticEvent } from 'react';
import getRandomInRange from '../../utils/getRandomInRange';

const RainbowText = ({ text, className, tag }: { className?: string; text: string; tag: string }) => {
  const CustomTag: any = tag;

  const colorsText = [
    'text-pastel-green',
    'text-pastel-blue',
    'text-pastel-yellow',
    'text-pastel-indigo',
    'text-pastel-purple',
    'text-pastel-pink',
  ];

  const onHover = (e: BaseSyntheticEvent): void => {
    const target = e.target as HTMLSpanElement;

    removeClass(target);

    const choosedClass = colorsText[getRandomInRange(0, colorsText.length - 1)];
    target.classList.add(choosedClass);

    setTimeout(() => {
      removeClass(target, choosedClass);
    }, 5000);
  };

  const removeClass = (element: HTMLSpanElement, classToRemove?: string) => {
    if (!classToRemove) {
      const matched = element.className.match(/text-\S+-\S+/g);
      matched?.forEach((str) => element.classList.remove(str));
    } else {
      element.classList.remove(classToRemove);
    }
  };

  return (
    <>
      <CustomTag className={className}>
        {text.split('').map((char, index) => {
          if (char === ' ') return char;

          return (
            <span
              key={index}
              onMouseOver={onHover}
              className={`transition duration-300 inline-block transform hover:-translate-y-3 hover:scale-105`}
            >
              {char}
            </span>
          );
        })}
      </CustomTag>
    </>
  );
};

export default RainbowText;
