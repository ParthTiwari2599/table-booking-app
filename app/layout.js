import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Table Booking App',
  description: 'Book your tables easily!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
          type="module"
          async
        ></script>

      </head>

      <body className="relative bg-gray-50 text-gray-900 overflow-x-hidden">




        <Navbar />
        <main>{children}</main>


        <Footer />
      </body>
    </html>
  )
}
