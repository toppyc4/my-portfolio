import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax"
import * as style from "./Intro.module.css"

import layer1 from "../layers/1.png"
import layer2 from "../layers/2.png"
import layer3 from "../layers/3.png"
import layer4 from "../layers/4.png"
import layer5 from "../layers/5.png"
import layer6 from "../layers/6.png"
import layer7 from "../layers/7.png"
import layer8 from "../layers/8.png"
import layer9 from "../layers/9.png"
import layer10 from "../layers/10.png"
import layer11 from "../layers/11.png"

export default function Intro() {
  console.log("Run")
  const layers = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  console.log(layers)
  return (
    <div className={style.root}>
      <div className={style.container}>
        <img src={`/src/layers/www.kanyewest.com.jpg`} />
        {/* {layers.map((num, i) => (
          <Parallax key={`layer-${i}`} className={style.layers}>
            {<img src={`/src/layers/${num}.png`} />}
          </Parallax>
        ))} */}
      </div>
    </div>
  )
}

// translateX={[0, 100 * (i - 3)]} translateY={[100 * (-i + 1), 100]}
{
  /* <div>
      <Parallax translateY={[100, 0]}>
        <img src={layer11} />
      </Parallax>
      <Parallax translateY={[-160, 0]}>
        <img src={layer10} />
      </Parallax>
      <Parallax translateY={[-245, 0]}>
        <img src={layer9} />
      </Parallax>
      <Parallax translateY={[-290, 0]}>
        <img src={layer8} />
      </Parallax>
      <Parallax translateY={[-314, 0]}>
        <img src={layer7} />
      </Parallax>
      <Parallax translateY={[-330, 0]}>
        <img src={layer6} />
      </Parallax>
      <Parallax translateY={[-341, 0]}>
        <img src={layer5} />
      </Parallax>
      <Parallax translateY={[-350, 0]}>
        <img src={layer4} />
      </Parallax>
      <Parallax translateY={[-357, 0]}>
        <img src={layer3} />
      </Parallax>
      <Parallax translateY={[-362, 0]}>
        <img src={layer2} />
      </Parallax>
      <Parallax translateY={[-370, 0]}>
        <img src={layer1} />
      </Parallax>
    </div> */
}
