import Project from "./Project"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const el = useRef()
  const tl = useRef()
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: el.current,
            start: "top center",
            end: "40% center",
            markers: true,
            scrub: true,
            // pin: true,
          },
        })
        .fromTo(
          "#title",
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            duration: 1,
            y: 0,
            ease: "power3.out",
          }
        )
        .fromTo(
          "#text",
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            duration: 1,
            y: 0,
            ease: "power3.out",
          }
        )
    })
  })

  return (
    <div
      className='min-h-screen bg-sky-300 flex flex-col items-center'
      ref={el}
    >
      <div className='p-20 flex flex-col items-center'>
        <h1
          id='title'
          className='pb-5 text-blue-700 text-7xl font-Crimson_Text font-semibold'
        >
          Feature Projects
        </h1>
        <p id='text' className='font-Fira_Code'>
          Here are some of my projects that I am proudly present
        </p>
        <div className='m-20 grid grid-cols-3 '>
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  )
}
