import Image from 'next/image'
import Navbar from './client-component/nav-bar/nav'
import Home from './server-component/home/home'
import Skills from './client-component/skills/skills'
import Service from './server-component/services/services'
import Portfolios from './server-component/portfolios/portfolios'
import Reviews from './server-component/reviews/reviews'
import Footer from './server-component/footer/footer'
import Head from 'next/head'

export const metadata = {
  title: 'Alif Ahmed - Full Stack Web Developer',
  description: "I'm Alif Ahmed a FUll Stack Web developer based in bangladesh.",
  keywords: 'alif ahmed, full stack web developer, mern stack developer, front end developer, backend developer, ui designer, ux designer, creative web developer, dsyncro, coder, software engineer'
}


export default function Main() {
  return (
    <>
       <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
       <link rel="icon" href="./favicon.ico" />
    </Head>
    <main className="main">
      <Navbar />
      <Home />
      <Skills />
      <Service />
      <Portfolios />
      <Reviews />
      <Footer />
    </main>
    </>
  )
}
