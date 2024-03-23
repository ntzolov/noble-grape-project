import Back from '@/components/buttons/Back/Back';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='system-wrapper'>
      <div className='not-found'>
        <p>404</p>
        <h2>Oops, The Page you are looking for can&apos;t be found!</h2>
        <Back />
        <Link className='btn' href={'/'}>
          Return to homepage
        </Link>
      </div>
    </div>
  );
}
