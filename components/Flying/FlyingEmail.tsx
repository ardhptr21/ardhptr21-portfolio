import FlyingContainer from './FlyingContainer';

const FlyingEmail = (): JSX.Element => {
  return (
    <FlyingContainer isLeft={false}>
      <p style={{ writingMode: 'vertical-lr' }}>ardhiputrapradana21@gmail.com</p>
    </FlyingContainer>
  );
};

export default FlyingEmail;
