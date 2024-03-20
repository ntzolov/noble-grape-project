'use client';

import styles from './TopNav.module.scss';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function TopNav() {
  const { data, status, loading } = useSession();

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
      </ul>
    </nav>
  );
}
