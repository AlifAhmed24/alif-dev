import Image from 'next/image'
import Navbar from './client -component/nav-bar/nav'
import Home from './server-component/home/home'

export default function Main() {
  return (
    <main className="main">
      <Navbar />
      <Home />
    </main>
  )
}
