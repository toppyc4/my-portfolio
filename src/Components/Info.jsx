import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Info() {
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
            // start: "top top",
            // end: () => "+=" + document.querySelector("#ellipse").offsetWidth,
            // markers: true,
            scrub: true,
            // pin: true,
          },
        })
        .fromTo(
          "#ellipse",
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            duration: 1,
            y: 0,
            ease: "power3.out",
          }
        )
        .fromTo(
          "#title",
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
            y: 0,
          }
        )
        .fromTo(
          "#content",
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
            y: 0,
          }
        )
    }, el)
    return () => ctx.revert
  }, [])
  return (
    <div
      id='container'
      className='h-screen  bg-sky-200 flex items-center justify-center overflow-visible'
      ref={el}
    >
      <div
        id='ellipse'
        className='w-[1170px] h-[1260px] bg-sky-100 rounded-[50%] flex place-items-center'
      >
        <div className='m-auto flex flex-col justify-center text-center'>
          <div id='title' className='p-5'>
            <h1 className='pb-1 text-white text-8xl font-Fira_Code'>
              Suphawat
            </h1>
            <span className='text-white text-2xl font-Fira_Code'>@toppyc4</span>
          </div>

          <div
            id='content'
            className='max-w-3xl text-blue-700 text-2xl font-Fira_Code'
          >
            <p className=''>Hi, my name is Suphawat you can call me Top.</p>
            <p>
              I am self-taught programmer, who loves to play basketball. By
              study aboard in the US as an exchange student, I find Thailand way
              too hot for living, so I am looking for Software Engineer job
              aboard. I have experiences in font-end dev, but also interest in
              other fields
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
