import { useState } from "react"
import Intro from "./Components/Intro"
import Info from "./Components/Info"
import Projects from "./Components/Pjs/Projects"
import Footer from "./Components/Footer"
import Modal from "./Components/Modal/Modal"
import Modal2 from "./Components/Modal/Modal2"

export default function Portfolio() {
  return (
    <div>
      <Intro />
      <Info />
      <Projects />
      <Footer />
      {/* <Modal /> */}
    </div>
  )
}
