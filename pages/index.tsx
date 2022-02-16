import type { NextPage } from 'next';
import Section from '../components/Base/Section';
import Layout from '../components/Layout';
const Home: NextPage = () => {
  return (
    <Layout>
      <Section isPt={true}>
        <h1>Hello World</h1>
      </Section>
    </Layout>
  );
};

export default Home;
