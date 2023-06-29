'use client';
import { Button } from '@/components/button/Button';

import { signIn, signOut } from 'next-auth/react';
import { signUp } from 'next-auth-sanity/client';
import { useSession } from 'next-auth/react';

export default function Login() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  // const register = async () => {
  //   await signUp({
  //     email: 'basketballwingirl@gmail.com',
  //     password: 'Swimming123!',
  //     name: 'Alyssa Jackson',
  //   });
  // };

  // const login = async () => {
  //   await signIn('sanity-login', {
  //     redirect: false,
  //     email: 'basketballwingirl@gmail.com',
  //     password: 'Swimming123!',
  //   });
  // };
  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="max-w-[1440px] w-[100%] min-h-[calc(100vh-60px)] my-8">
        {loading && <div>Loading...</div>}
        {session && (
          <>
            <p>Signed in as {session.user?.email}</p>
            <p>Welcome {session.user?.name}!</p>
            <Button label="Logout" onClick={() => signOut()} />
          </>
        )}
        {!loading && !session && <Button label="Login" onClick={() => signIn()} />}
        {/* <Button label="Register" onClick={() => register()} /> */}
      </div>
    </div>
  );
}
