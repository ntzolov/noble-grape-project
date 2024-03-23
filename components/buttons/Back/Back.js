'use client';

import { useRouter } from 'next/navigation';

export default function Back() {
  const router = useRouter();

  return (
    <a
      className='btn'
      onClick={() => {
        router.back();
      }}>
      BACK
    </a>
  );
}
