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
        <li>
          <Link href='#'>ITEMS</Link>
        </li>
        <li>
          <Link href='#'>CATEGORIES</Link>
        </li>
        <li>
          <Link href='#'>SEARCH</Link>
        </li>
        <li>
          <Link href='#'>ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}
