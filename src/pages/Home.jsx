import React from 'react'
import TopNavBar from '../components/TopNavBar'
import Navbar from '../components/Navbar'
import HeaderWithCarousel from '../components/CarouselArea'

export default function Home() {
  return (
    <React.Fragment>
        <TopNavBar />
        <Navbar />
        <main className="ml-[2rem] mr-[2rem]">
          <HeaderWithCarousel />
        </main>
    </React.Fragment>
  )
}
