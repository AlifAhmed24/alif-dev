import './globals.css'
import Head from 'next/head';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Full Stack Developer Alif Ahmed',
  description: "I'm Alif Ahmed a FUll Stack Web developer based in bangladesh.",
  keywords: 'alif ahmed, full stack web developer, mern stack developer, front end developer, backend developer, ui designer, ux designer, creative web developer, dsyncro, coder, software engineer'
}

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
