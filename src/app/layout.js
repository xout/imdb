import Header from '@/components/Header.jsx';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />

        {/* Navbar */}

        {/* SearchBox */}
        
        {children}
      </body>
    </html>
  )
}
