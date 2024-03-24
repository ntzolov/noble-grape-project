import Link from 'next/link';
import styles from './AdminNav.module.scss';

export default function AdminNav() {
  return (
    <nav className={styles['navigation']}>
      <ul className={styles['admin-nav']}>
        <li>
          <div className={styles['link']}>
            <Link href={'/'} className='pointer'>
              LOGOUT
            </Link>
          </div>
        </li>
        <li>
          <div className={styles['link']}>
            <Link href={'/'} className='pointer'>
              LOGOUT
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
