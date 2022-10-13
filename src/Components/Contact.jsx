import { useState } from "react"
import { db } from "../../lib/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"
import toast, { Toaster } from "react-hot-toast"

const Contact = ({ showContact }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    //Add a new document with generated id.
    const docRef = await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
    })
      .then(() => {
        toast.success("Successfully send the message!🎉", {
          position: "bottom-right",
        })
      })
      .catch((err) => {
        toast.error(`oops, ${err}!`, {
          position: "bottom-right",
        })
      })
    // .then(() => {
    //   // alert("Successfully send the message!🎉")
    // })
    // .catch((err) => {
    //   alert(err.message)
    // })

    // toast.promise(
    //   docRef,
    //   {
    //     loading: "Loading",
    //     success: "Successfully send the message🎉",
    //     error: (err) => `Oops..., ${err.message.toString()}`,
    //   },
    //   {
    //     position: "bottom-left",
    //     style: {},
    //   }
    // )
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className='w-8/12 mx-auto p-8 border-2 rounded-lg border-black bg-indigo-900 text-white'>
      <nav className='flex justify-end'>
        <button onClick={() => showContact(false)}>X</button>
      </nav>
      <div className='flex flex-col align-center items-center'>
        {/* <div>
          <h1 className='text-2xl'>Contact Form</h1>
        </div> */}
        <div>
          <p>Wow, you made it this far! Let's communicate!</p>
          {/* <p>
            (PS. the most progress in this website will be seen after you click
            the submit button)
          </p> */}
        </div>

        {/* The from */}
        <div className='w-full self-start'>
          <form className='mt-2 flex flex-col' onSubmit={handleSubmit}>
            <div className='mt-1 flex flex-col'>
              <label>Message:</label>
              <textarea
                className='min-h-[80px]'
                maxLength='4000'
                placeholder=' If nothing, sharing your music will be really appreciated :)'
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
              ></textarea>
            </div>
            <div className='mt-1 flex flex-col'>
              <label>your Name:</label>
              <input
                type='text'
                placeholder=' Toppo Targaryen'
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              ></input>
            </div>
            <div className='mt-1 flex flex-col'>
              <label>your Email:</label>
              <input
                type='email'
                placeholder=' toppy@toffee.csgo'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              ></input>
            </div>
            <div className='mt-2 flex justify-end'>
              {/* <button className='formBtn' onClick={() => showContact(false)}>
                Cancel
              </button> */}
              <button className='formBtn' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Contact
