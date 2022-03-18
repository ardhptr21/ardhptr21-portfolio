import { DetailedHTMLProps, MouseEventHandler } from 'react';
import Button from '.';

const Dot = ({
  className,
  onClick,
  children,
  type,
}: {
  className?: string;
  onClick?: MouseEventHandler;
  children: React.ReactNode;
  type: DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['type'];
}): JSX.Element => {
  return (
    <Button className={`border-dotted ${className ? className : ''}`} type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default Dot;
