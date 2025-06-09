'use client';
import { Button } from "@heroui/react";
import { useRouter } from 'next/navigation';

export default function BackHome({
  isError = false,
  className,
  children,
  ...props
}: {
  isError?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <Button
      {...props}
      variant="shadow"
      size="lg"
      color="success"
      className={className}
      onPress={() => {
        if (isError) {
          document.cookie = '';
          window.location.reload();
        } else {
          router.push('/');
        }
      }}
    >
      {children ? children : 'Trang chủ'}
    </Button>
  );
}
