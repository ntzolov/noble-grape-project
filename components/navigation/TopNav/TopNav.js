'use client';

import styles from './TopNav.module.scss';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function TopNav() {
  const { data, status } = useSession();
  console.log({ data, status });
  console.log(process.env.NEXT_PUBLIC_TEST);

  return (
    <nav className={styles['navigation']}>
      <ul className={styles['top-nav']}>
        <li>
          <div className={styles['link']}>
            <Link href='/' className={styles['logo-text']}>
              Noble Grape
            </Link>
          </div>
        </li>
        {status === 'authenticated' ? (
          <div className={styles['top-nav--auth']}>
            <li>
              <div className={styles['link']}>
                <a className='pointer' onClick={() => signOut({ callbackUrl: '/login' })}>
                  LOGOUT
                </a>
              </div>
            </li>
            <li>
              <div className={styles['link']}>
                <Link href={`dashboard/${data?.user?.role === 'admin' ? 'admin' : 'user'}`}>
                  <p className={styles['user-icon']}>&#9998;</p>
                  <p>{data?.user?.name}</p>
                </Link>
              </div>
            </li>
          </div>
        ) : status === 'loading' ? (
          <div className={styles['top-nav--auth']}>
            <li>
              <div className={styles['link']}>
                <a>Loading...</a>
              </div>
            </li>
          </div>
        ) : (
          <div className={styles['top-nav--auth']}>
            <li>
              <div className={styles['link']}>
                <Link href='/login'>LOGIN</Link>
              </div>
            </li>
            <li>
              <div className={styles['link']}>
                <Link href='/register'>REGISTER</Link>
              </div>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}
