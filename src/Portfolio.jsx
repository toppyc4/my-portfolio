import { useState } from "react"
import Intro from "./Components/Intro"
import Info from "./Components/Info"
import Projects from "./Components/Pjs/Projects"
import Footer from "./Components/Footer"
import Test from "./Components/Test"

export default function Portfolio() {
  return (
    <div className='bg-black'>
      {/* <Test /> */}
      <Intro />
      <Info />
      <Projects />
      <Footer />
    </div>
  )
}
