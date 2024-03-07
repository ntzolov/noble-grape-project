import s from './TopNav.module.scss';
import Link from 'next/link';

export default function TopNav() {
  return (
    <nav>
      <ul className={s['top-nav']}>
        <li>
          <Link href='/' className={s['logo-text']}>
            Noble Grape
          </Link>
        </li>
        <div className={s['top-nav--auth']}>
          <li>
            <Link href='/login'>LOGIN</Link>
          </li>
          <li>
            <Link href='/register'>REGISTER</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
