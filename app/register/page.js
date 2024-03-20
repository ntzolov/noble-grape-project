'use client';

import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import registerImage from '@/public/images/register-image.avif';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePass, setRePass] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function submitHandler(e) {
    e.preventDefault();

    try {
      if ((!name, !email, !password, !rePass)) {
        toast.error('All fields are required!');
        return;
      }

      if (password !== rePass) {
        toast.error("Password doesn't match!");
        return;
      }

      if (Number(password.length) < 6 || Number(rePass.length) < 6) {
        toast.error('Password should be at least 6 characters long!');
        return;
      }

      setLoading(true);

      const response = await fetch(`${process.env.API}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error);
        setLoading(false);
      } else {
        toast.success(data.success);
        router.push('/login');
      }
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  }

  return (
    <section className={styles['signup']}>
      <div className={styles['container']}>
        <div className={styles['signup-content']}>
          <div className={styles['signup-form']}>
            <h2 className={styles['form-title']}>Sign Up</h2>
            <form onSubmit={submitHandler} className={styles['register-form']} id='register-form'>
              <div className={styles['form-group']}>
                <label htmlFor='name'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                    <path
                      fillRule='evenodd'
                      d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' />
              </div>
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
              <div className={styles['form-group']}>
                <label htmlFor='rePass'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                    <path
                      fillRule='evenodd'
                      d='M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </label>
                <input
                  type='password'
                  value={rePass}
                  onChange={(e) => setRePass(e.target.value)}
                  placeholder='Repeat your password'
                />
              </div>
              <div className={`${styles['form-group']} ${styles['form-button']}`}>
                <input
                  type='submit'
                  disabled={loading}
                  value={loading ? 'Loading...' : 'Register'}
                  className={`${styles['form-submit']} ${'btn'}`}
                />
                <Link href={'/login'} className={styles['signup-image-link']}>
                  I am already member
                </Link>
              </div>
            </form>
          </div>
          <div className={styles['signup-image']}>
            <Image src={registerImage} width={475} height={725} alt='sign up image' />
          </div>
        </div>
      </div>
    </section>
  );
}
