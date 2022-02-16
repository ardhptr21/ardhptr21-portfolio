import type { NextPage } from 'next';
import Image from 'next/image';
import Section from '../components/Base/Section';
import Button from '../components/Button';
import Layout from '../components/Layout';
import NiceLink from '../components/Text/NiceLink';
import RainbowText from '../components/Text/RainbowText';

const Home: NextPage = () => {
  return (
    <Layout>
      <Section className="flex items-center justify-between h-screen">
        <div className="flex flex-col justify-center gap-5 text-xl" style={{ flex: 2 }}>
          <h2 className="text-sm font-semibold tracking-wide text-gray-900 md:text-base font-montserrat">
            Hi, my name is
          </h2>
          <RainbowText
            tag="h1"
            text="Ardhi Putra."
            className="z-0 inline-block text-4xl font-bold text-gray-900 md:text-5xl lg:text-8xl cursor-cell font-montserrat"
          />
          <h2 className="text-xl font-bold text-gray-500 md:text-3xl lg:text-5xl">I build things awesome.</h2>
          <p className="text-sm text-gray-900 md:text-base">
            I{"'"}m a student at{' '}
            <a href="https://smkn7semarang.sch.id/" rel="noreferrer" target="_blank">
              <NiceLink>SMK N 7 Semarang</NiceLink>
            </a>
            . I really enjoy when writing code, because it
            {"'"}s like playing a game. Currently, I{"'"}m focused on building a modern website.
          </p>
          <Button type="button" className="mt-8 hover:bg-pastel-pink">
            See Detail
          </Button>
        </div>
        <div className="relative items-center justify-center hidden w-full h-full md:flex" style={{ flex: 1.2 }}>
          <Image src="/images/people.svg" alt="people" width="500px" height="500px" />
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
