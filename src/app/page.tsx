'use client';
import { getProfile } from '@/api/profile';
import Loading from '@/components/Loading';
import Text from '@/components/Text';
import { ThemeSwitch } from '@/components/ThemeToggle';
import { addToast, Button, Input } from '@heroui/react';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const email = formData.get('email') as string;
      if (!email) {
        addToast({
          title: 'Error',
          description: 'Email is required',
          color: 'danger',
        });
        return;
      }
      const profile = await getProfile(email);
      addToast({
        title: 'Profile',
        description: (
          <Text as={'pre'} className="text-xs">
            {JSON.stringify(profile, null, 2)}
          </Text>
        ),
        color: 'success',
      });
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'Unknown error');
      addToast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Unknown error',
        color: 'danger',
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <ThemeSwitch />
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input type="email" name="email" />
        <Button type="submit">Get Profile</Button>
      </form>
      {loading && <Loading />}
    </>
  );
}
