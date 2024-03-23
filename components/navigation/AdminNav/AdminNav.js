import Link from 'next/link';
import styles from './AdminNav.module.scss';

export default function AdminNav() {
  return (
    <nav className={styles['navigation']}>
      <ul className={styles['top-nav']}>
        <div className={styles['top-nav--auth']}>
          <li>
            <div className={styles['link']}>
              <a className='pointer'>LOGOUT</a>
            </div>
          </li>
        </div>
      </ul>
    </nav>
  );
}
