import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/signup');
    }, 3000);
  }, []);

  return (
    <Main>
      <div className="flex h-full items-center justify-center">
        <div className="flex w-96 flex-col items-center justify-center space-y-4 rounded-2xl pb-12">
          <img
            className="h-20"
            src="https://www.alistier.dev/05dafbb6dd374c290cec3c97d0c158cb.png"
            alt="logo"
          />
          <p className="font-w-bold text-md w-96 text-center text-white">
            Redirecting you to Signup
          </p>
        </div>
      </div>
    </Main>
  );
};

export default Index;
