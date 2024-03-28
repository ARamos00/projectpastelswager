'use client'
// Assuming 'use client' is at the top if you're using Next.js 13+ features.
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config'; // Adjust the path as needed.
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import Link from 'next/link';

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  // // Redirect logic remains unchanged.
  // if (!user) {
  //   router.push('/sign-up');
  // }

  return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-white">
        <Image src="/logo.png" alt="Project Logo" width={512} height={512} />
        <h1 className="mt-4 text-4xl">Welcome!</h1>
        <div className="mt-8 space-x-4">
          {user ? (
              <button
                  className="px-4 py-2 bg-red-500 rounded hover:bg-red-700 transition duration-300"
                  onClick={async () => {
                    await signOut(auth);
                    sessionStorage.removeItem('user');
                    router.push('/sign-in/');
                  }}
              >
                Log out
              </button>
          ) : (
              <>
                <Link href="/sign-in/" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition duration-300">
                  Login
                </Link>
                <Link href="/sign-up/" className="px-4 py-2 bg-green-500 rounded hover:bg-green-700 transition duration-300">
                  Sign Up
                </Link>
              </>
          )}
        </div>
      </div>
  );
}
