import FlyingContainer from './FlyingContainer';
import { FiCodepen, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const FlyingSosmed = (): JSX.Element => {
  return (
    <FlyingContainer isLeft={true}>
      <ul className="flex flex-col items-center justify-center gap-5">
        <li>
          <a href="https://github.com/ardhptr21" target="_blank" rel="noreferrer">
            <FiGithub className="w-5 h-5 transition duration-300 transform hover:scale-110 hover:text-pastel-yellow hover:-translate-y-1" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/ardhptr21" target="_blank" rel="noreferrer">
            <FiInstagram className="w-5 h-5 transition duration-300 transform hover:scale-110 hover:text-pastel-yellow hover:-translate-y-1" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ardhptr21" target="_blank" rel="noreferrer">
            <FiTwitter className="w-5 h-5 transition duration-300 transform hover:scale-110 hover:text-pastel-yellow hover:-translate-y-1" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/ardhptr21" target="_blank" rel="noreferrer">
            <FiLinkedin className="w-5 h-5 transition duration-300 transform hover:scale-110 hover:text-pastel-yellow hover:-translate-y-1" />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/ardhptr21" target="_blank" rel="noreferrer">
            <FiCodepen className="w-5 h-5 transition duration-300 transform hover:scale-110 hover:text-pastel-yellow hover:-translate-y-1" />
          </a>
        </li>
      </ul>
    </FlyingContainer>
  );
};

export default FlyingSosmed;
