import Project from "./Project"

export default function Projects() {
  return (
    <div className='min-h-screen bg-sky-300 flex flex-col items-center'>
      <div className='p-20 flex flex-col items-center'>
        <h1 className='pb-5 text-blue-700 text-6xl font-Crimson_Text font-bold'>
          Feature Projects
        </h1>
        <p className='font-Fira_Code'>
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
