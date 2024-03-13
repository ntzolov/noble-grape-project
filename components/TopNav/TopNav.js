import styles from './TopNav.module.scss';
import Link from 'next/link';

export default function TopNav() {
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
