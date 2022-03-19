import Navbar from './Navbar';
import FlyingEmail from '../Flying/FlyingEmail';
import FlyingSosmed from '../Flying/FlyingSosmed';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <FlyingEmail />
      <FlyingSosmed />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
