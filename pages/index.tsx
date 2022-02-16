import axios, { AxiosError } from 'axios';
import type { NextPage } from 'next';
import Image from 'next/image';
import { BsMouse } from 'react-icons/bs';
import { RiArrowUpSLine } from 'react-icons/ri';
import Section from '../components/Base/Section';
import Button from '../components/Button';
import Layout from '../components/Layout';
import NiceLink from '../components/Text/NiceLink';
import RainbowText from '../components/Text/RainbowText';
import Title from '../components/Text/Title';
import getRandomInRange from '../utils/getRandomInRange';

type quoteT = { text: string; author: string } | null;

interface IProps {
  quote: quoteT;
}

const Home: NextPage<IProps> = ({ quote }: IProps) => {
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
        <div className="absolute left-0 right-0 flex items-center justify-center bottom-5">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <BsMouse className="w-8 h-8" />
            <span className="rotate-180">
              <RiArrowUpSLine className="w-10 h-10 animate-bounce" />
            </span>
          </div>
        </div>
      </Section>
      <Section className="bg-gradient-to-tr from-pastel-purple to-pastel-indigo">
        <Title>Quote of The Day</Title>
        <blockquote className="text-center">
          <q className="inline-block text-2xl">
            {quote?.text ? quote.text : 'Sorry, but no quote is available today.'}
          </q>
          <cite className="flex items-center justify-center mt-2 text-lg before:w-10 before:bg-black before:h-[1px] gap-3 before:block">
            {quote?.author ? quote.author : 'Unknown'}
          </cite>
        </blockquote>
      </Section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  let quote: quoteT = null;

  try {
    const res = await axios.get('https://type.fit/api/quotes');
    quote = res.data[getRandomInRange(0, res.data.length - 1)];
  } catch (err: any) {
    console.log(err.message);
  }

  return {
    props: { quote },
    revalidate: 3600 * 24,
  };
};

export default Home;
