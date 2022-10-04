import { ParallaxProvider } from "react-scroll-parallax"
import Portfolio from "./Portfolio"

export default function App() {
  return (
    <ParallaxProvider>
      <Portfolio />
    </ParallaxProvider>
  )
}
