import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
  const el = useRef()
  const tl = useRef()

  // useEffect(() => {
  //   const el = imgRef.current
  //   gsap.fromTo(
  //     el,
  //     { scale: 0.5 },
  //     {
  //       scale: 1.5,
  //       scrollTrigger: {
  //         trigger: el,
  //         scrub: true,
  //         marker: true,
  //       },
  //     }
  //   )
  // }, [])

  // useEffect(() => {
  //   tl.current = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: Intro,
  //       start: "center bottom",
  //       start: "top top",
  //       scrub: true,
  //       marker: true,
  //     },
  //   })
  //   tl.current.to(
  //     layer3Ref,
  //     {
  //       yPercent: -100,
  //     },
  //     0
  //   )
  // }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: el.current,
            start: "center center",
            end: "69% center",
            // pin: ".bg-pic",
            scrub: true,
            markers: true,
          },
        })
        // .to(".bg-pic", { scale: 0.8 })
        .to(".layer7", { yPercent: 1 }, 0)
        .to(".layer6", { yPercent: 3 }, 0)
        .to(".layer5", { yPercent: 8 }, 0)
        .to(".layer4", { yPercent: 14 }, 0)
        .to(".layer3", { yPercent: 22 }, 0)
        .to(".layer2", { yPercent: 33 }, 0)
        .to(".layer1", { yPercent: 44 }, 0)
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div>
      <section ref={el}>
        <img src='/pic.svg' className='bg-pic static' alt='bg-pic' />
        <img
          src='/layers/7.svg'
          className='layer7 absolute top-[-3%] right-[27.2%]'
          alt='layer7'
          id='layer7'
        />
        <img
          src='/layers/6.svg'
          className='layer6 absolute top-[-3%] right-[24%]'
          alt='layer6'
          id='layer6'
        />
        <img
          src='/layers/5.svg'
          className='layer5 absolute top-[-5%] right-[20%]'
          alt='layer5'
          id='layer5'
        />
        <img
          src='/layers/4.svg'
          className='layer4 absolute top-[-6%] right-[14.5%]'
          alt='layer4'
          id='layer4'
        />
        <img
          src='/layers/3.svg'
          className='layer3 absolute top-[-10%] right-[7%]'
          alt='layer3'
          id='layer3'
        />
        <img
          src='/layers/2.svg'
          className='layer2 absolute top-[-14%]'
          alt='layer2'
          id='layer2'
        />
        <img
          src='/layers/1.svg'
          className='layer1 absolute top-[-9%] z-1'
          alt='layer1'
          id='layer1'
        />
      </section>
    </div>
  )
}

export default Intro
