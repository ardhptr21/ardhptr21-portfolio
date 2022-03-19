import Section from '../../Base/Section';
import { BsFillHeartFill } from 'react-icons/bs';
import { FiCodepen, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = (): JSX.Element => {
  return (
    <footer className="text-center mt-18">
      <Section className="pb-10">
        <div className="flex items-center mb-6 justify-evenly md:hidden">
          <a href="https://github.com/ardhptr21" target="_blank" rel="noreferrer">
            <FiGithub className="w-5 h-5 transition duration-300 transform hover:scale-110 hover:text-pastel-yellow hover:-translate-y-1" />
          </a>
          <a href="https://instagram.com/ardhptr21" target="_blank" rel="noreferrer">
            <FiInstagram className="w-5 h-5 transition duration-300 transform hover:scale-110 hover:text-pastel-yellow hover:-translate-y-1" />
          </a>
          <a href="https://twitter.com/ardhptr21" target="_blank" rel="noreferrer">
            <FiTwitter className="w-5 h-5 transition duration-300 transform hover:scale-110 hover:text-pastel-yellow hover:-translate-y-1" />
          </a>
          <a href="https://linkedin.com/in/ardhptr21" target="_blank" rel="noreferrer">
            <FiLinkedin className="w-5 h-5 transition duration-300 transform hover:scale-110 hover:text-pastel-yellow hover:-translate-y-1" />
          </a>
          <a href="https://codepen.io/ardhptr21" target="_blank" rel="noreferrer">
            <FiCodepen className="w-5 h-5 transition duration-300 transform hover:scale-110 hover:text-pastel-yellow hover:-translate-y-1" />
          </a>
        </div>
        <h5 className="text-sm md:text-base">
          Designed & Built with <BsFillHeartFill className="inline text-red-500 animate-pulse" /> by Ardhi Putra
        </h5>
      </Section>
    </footer>
  );
};

export default Footer;
