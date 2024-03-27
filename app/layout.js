import TopNav from '@/components/navigation/TopNav/TopNav';
import Footer from '@/components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import $SessionProvider from '@/context/sessionProvider';
import CategoryProvider from '@/context/category';

import './globals.scss';

// export const metadata = {
//   title: 'Noble Grape',
//   description: 'Online shop for fine and luxury wines.',
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <$SessionProvider>
        <CategoryProvider>
          <body suppressHydrationWarning={true}>
            <div className='main-container'>
              <TopNav />
              <Toaster
                toastOptions={{
                  className: 'toaster',
                }}
              />
              <main>{children}</main>
              <Footer />
            </div>
          </body>
        </CategoryProvider>
      </$SessionProvider>
    </html>
  );
}
