import Hero from '@/components/Hero/Hero';
import styles from './page.module.scss';
import { Test } from '@/components/Test/Test';

export default function Home() {
  console.log(process.env.TEST);

  return (
    <>
      <Hero />
      <Test />
    </>
  );
}
