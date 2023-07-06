import './globals.css'
import Head from 'next/head';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
    </Head>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  )
}
