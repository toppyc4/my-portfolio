import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Modal from "./Modal/Modal"
import Modal2 from "./Modal/Modal2"

export default function Footer() {
  // const [modalOpen, setModalOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // const close = () => setModalOpen(false)
  // const open = () => setModalOpen(true)

  return (
    <div className='max-w-40vh bg-blue-800 flex flex-col items-center'>
      <h1 className='mt-5 p-10 text-6xl text-white font-Crimson_Text font-bold'>
        Let's Talk
      </h1>
      {/* <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='p-5 text-3xl text-white underline font-Crimson_Text'
        onClick={() => (modalOpen ? close() : open())}
      >
        Contact form
      </motion.button>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exist
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all existing nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close} text={"what's up"} />
        )}
      </AnimatePresence> */}

      <button
        className='p-3 text-3xl text-white underline font-Crimson_Text'
        onClick={() => {
          setShowModal(true)
        }}
      >
        Contact form
      </button>
      {showModal && <Modal2 showModal={setShowModal} />}
      {/* <a className='p-5 text-3xl text-white underline font-Crimson_Text'>
        Contact form
      </a> */}
      <div className='p-10 grid grid-cols-4 gap-8 justify-items-center'>
        <a
          href='https://github.com/toppyc4'
          className='text-2xl text-white underline font-Crimson_Text'
        >
          Github
        </a>
        <a
          href='https://github.com/toppyc4'
          className='text-2xl text-white underline font-Crimson_Text'
        >
          Email
        </a>
        <a
          href='https://twitter.com/toppyc4'
          className='text-2xl text-white underline font-Crimson_Text'
        >
          Twitter
        </a>
        <a
          href='https://open.spotify.com/user/21hpvmd3tcimzdoovoosoneky'
          className='text-2xl text-white underline font-Crimson_Text'
        >
          Spotify
        </a>
      </div>
      <p className='mt-5 mb-3 text-l text-black font-Fira_Code'>
        Suphawat W. © Copy All Rights Reserve
      </p>
    </div>
  )
}
