import TopNav from '@/components/TopNav/TopNav';
import Footer from '@/components/Footer/Footer';

import './globals.scss';

export const metadata = {
  title: 'Noble Grape',
  description: 'Online shop for fine and luxury wines.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='main-container'>
          <TopNav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
