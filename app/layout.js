import TopNav from '@/components/TopNav/TopNav';
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
          {children}
        </div>
      </body>
    </html>
  );
}
