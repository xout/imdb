import Header from '@/components/Header.jsx';
import './globals.css';
import Providers from './Providers.jsx';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}

          {/* SearchBox */}

          {children}
        </Providers>        
      </body>
    </html>
  )
}
