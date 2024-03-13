import styles from './page.module.scss';
import Image from 'next/image';

import registerImage from '@/public/images/register-image.avif';
import Link from 'next/link';

export default function Register() {
  return (
    <section className={styles['signup']}>
      <div className={styles['container']}>
        <div className={styles['signup-content']}>
          <div className={styles['signup-form']}>
            <h2 className={styles['form-title']}>Sign Up</h2>
            <form method='POST' className={styles['register-form']} id='register-form'>
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
                <input type='text' name='name' id='register-name' placeholder='Your Name' />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor='email'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                    <path d='M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' />
                    <path d='M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' />
                  </svg>
                </label>
                <input type='email' name='email' id='register-email' placeholder='Your Email' />
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
                <input type='password' name='password' id='register-password' placeholder='Password' />
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
                <input type='password' name='rePass' id='register-rePass' placeholder='Repeat your password' />
              </div>
              <div className={`${styles['form-group']} ${styles['form-button']}`}>
                <input
                  type='submit'
                  name='signup'
                  id='register'
                  className={`${styles['form-submit']} ${'btn'}`}
                  value='Register'
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
