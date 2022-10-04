import React from "react"
import Intro from "./Components/Intro"
import Info from "./Components/Info"
import Projects from "./Components/Pjs/Projects"
import Fotter from "./Components/Footer"

export default function Portfolio() {
  return (
    <div>
      <Intro />
      <Info />
      <Projects />
      <Fotter />
    </div>
  )
}
