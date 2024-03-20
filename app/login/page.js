'use client';

import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import loginImage from '@/public/images/login-image.avif';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if ((!email, !password)) {
        toast.error('All fields are required!');
        return;
      }

      if (Number(password.length) < 6) {
        toast.error('Password should be at least 6 characters long!');
        return;
      }

      setLoading(true);
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        toast.error(result?.error);
        setLoading(false);
      } else {
        toast.success('Successfully logged in!');
        router.push('/');
      }
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <section className={styles['signin']}>
      <div className={styles['container']}>
        <div className={styles['signin-content']}>
          <div className={styles['signin-form']}>
            <h2 className={styles['form-title']}>Sign In</h2>
            <form onSubmit={handleSubmit} className={styles['login-form']} id='login-form'>
              <div className={styles['form-group']}>
                <label htmlFor='email'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                    <path d='M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' />
                    <path d='M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' />
                  </svg>
                </label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor='password'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                    <path
                      fillRule='evenodd'
                      d='M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
              </div>
              <div className={`${styles['form-group']} ${styles['form-button']}`}>
                <input
                  type='submit'
                  disabled={loading}
                  value={loading ? 'Loading...' : 'Login'}
                  className={`${styles['form-submit']} ${'btn'}`}
                />
                <Link href={'/register'} className={styles['signin-image-link']}>
                  Create an account
                </Link>
              </div>
            </form>
          </div>
          <div className={styles['signin-image']}>
            <Image src={loginImage} width={450} height={680} alt='sign in image' />
          </div>
        </div>
      </div>
    </section>
  );
}
