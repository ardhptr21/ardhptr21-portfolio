import type { NextPage } from 'next';
import Image from 'next/image';
import Section from '../components/Base/Section';
import Layout from '../components/Layout';
import NiceLink from '../components/Text/NiceLink';
import RainbowText from '../components/Text/RainbowText';
const Home: NextPage = () => {
  return (
    <Layout>
      <Section isPt={true} className="flex items-center justify-between">
        <div className="flex flex-col justify-center gap-5 text-xl" style={{ flex: 2 }}>
          <h2 className="font-semibold tracking-wide text-gray-900 font-montserrat">Hi, my name is</h2>
          <RainbowText
            tag="h1"
            text="Ardhi Putra."
            className="inline-block font-bold text-gray-900 text-8xl cursor-cell font-montserrat"
          />
          <h2 className="text-5xl font-bold text-gray-500">I build things awesome.</h2>
          <p className="text-gray-900">
            I{"'"}m a student at{' '}
            <a href="https://smkn7semarang.sch.id/" rel="noreferrer" target="_blank">
              <NiceLink>SMK N 7 Semarang</NiceLink>
            </a>
            . I really enjoy when writing code, because it
            {"'"}s like playing a game. Currently, I{"'"}m focused on building a modern website.
          </p>
        </div>
        <div className="relative w-full h-full" style={{ flex: 1 }}>
          <Image src="/images/people.svg" alt="people" width="500px" height="500px" />
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
