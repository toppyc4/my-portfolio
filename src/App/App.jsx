import { ParallaxProvider } from "react-scroll-parallax"
import style from "./App.module.css"
import Intro from "../Intro/Intro"

export default function App() {
  return (
    <ParallaxProvider>
      <Intro />
    </ParallaxProvider>
  )
}
