import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'

export const metadata = {
  title: 'Table Booking App',
  description: 'Book your tables easily!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="relative bg-gray-50 text-gray-900 overflow-x-hidden">
        <Script
          src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
          type="module"
          strategy="afterInteractive"
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
