import styles from './page.module.scss';
import Image from 'next/image';

import loginImage from '@/public/images/login-image.avif';
import Link from 'next/link';

export default function Login() {
  return (
    <section className={styles['signin']}>
      <div className={styles['container']}>
        <div className={styles['signin-content']}>
          <div className={styles['signin-form']}>
            <h2 className={styles['form-title']}>Sign In</h2>
            <form method='POST' className={styles['login-form']} id='login-form'>
              <div className={styles['form-group']}>
                <label htmlFor='email'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                    <path d='M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' />
                    <path d='M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' />
                  </svg>
                </label>
                <input type='email' name='email' id='login-email' placeholder='Your Email' />
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
                <input type='password' name='password' id='login-password' placeholder='Password' />
              </div>
              <div className={`${styles['form-group']} ${styles['form-button']}`}>
                <input type='submit' name='signin' id='login' className={`${styles['form-submit']} ${'btn'}`} value='Login' />
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
