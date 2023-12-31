import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CRUD APP',
  description: 'CRUD MongoDB via NEXT.JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-2 flex justify-center`}>
        <div className='w-full max-w-3xl' >
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
