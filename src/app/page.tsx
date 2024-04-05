import Loading from '@/components/Loading';
import { ThemeSwitch } from '@/components/ThemeToggle';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <ThemeSwitch />
      <Button>Hello world</Button>
      <Loading />
    </>
  );
}
