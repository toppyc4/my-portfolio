import React from "react"

export default function Footer() {
  return (
    <div className='max-w-50vh bg-blue-800 flex flex-col items-center'>
      <h1 className='mt-5 p-10 text-5xl text-white font-Crimson_Text font-bold'>
        Let's Talk
      </h1>
      <a className='p-5 text-3xl text-white underline font-Crimson_Text'>
        contact form
      </a>
      <div className='p-10 grid grid-cols-4 gap-8 justify-items-center'>
        <a className='text-2xl text-white underline font-Crimson_Text'>
          Github
        </a>
        <a className='text-2xl text-white underline font-Crimson_Text'>Email</a>
        <a className='text-2xl text-white underline font-Crimson_Text'>
          Twitter
        </a>
        <a className='text-2xl text-white underline font-Crimson_Text'>
          Spotify
        </a>
      </div>
      <p className='mt-5 mb-3 text-l text-black font-Fira_Code'>
        Suphawat W. @ Copy Right Reserve
      </p>
    </div>
  )
}
