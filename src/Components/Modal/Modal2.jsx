import React from "react"

const Modal2 = ({ showModal }) => {
  return (
    <div className='w-8/12 mx-auto p-8 bg-indigo-900 text-white'>
      <nav className='flex justify-end'>
        <button onClick={() => showModal(false)}>X</button>
      </nav>
      <div className='flex flex-col align-center items-center'>
        {/* <div>
          <h1 className='text-2xl'>Contact Form</h1>
        </div> */}
        <div>
          <p>Wow, you made it this far! Let's communicate!</p>
          <p>
            (PS. the most progress in this website will be seen after you click
            the submit button)
          </p>
        </div>
        <div className='w-full self-start'>
          <form className='mt-2 flex flex-col'>
            <div className='mt-1 flex flex-col'>
              <label>Message:</label>
              <textarea
                maxLength='5000'
                placeholder=' If nothing, sharing your music will be really apriciated :)'
              ></textarea>
            </div>
            <div className='mt-1 flex flex-col'>
              <label>your Name:</label>
              <input type='text' placeholder=' Toppo Targaryen'></input>
            </div>
            <div className='mt-1 flex flex-col'>
              <label>your Email:</label>
              <input type='email' placeholder=' toppy@toffee.csgo'></input>
            </div>
            <div className='mt-2 flex justify-end'>
              <button className='formBtn' onClick={() => showModal(false)}>
                Cancel
              </button>
              <button className='formBtn' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal2
