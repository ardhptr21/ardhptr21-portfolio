import Navbar from './Navbar';
import FlyingEmail from '../Flying/FlyingEmail';
import FlyingSosmed from '../Flying/FlyingSosmed';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <FlyingEmail />
      <FlyingSosmed />
      <main>{children}</main>
    </>
  );
};

export default Layout;
