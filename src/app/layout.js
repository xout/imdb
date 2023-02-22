import Header from '@/components/Header.jsx';
import './globals.css';
import Providers from './Providers.jsx';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}

          <Navbar />

          {/* SearchBox */}
          <SearchBox />

          {children}
        </Providers>        
      </body>
    </html>
  )
}
