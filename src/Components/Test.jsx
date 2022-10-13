import React from "react"
import toast, { Toaster } from "react-hot-toast"

const Test = () => {
  const notify = () => {
    toast.success("yay!")
    console.log("click")
  }
  return (
    <div>
      <button onClick={notify}>test</button>
      <Toaster />
    </div>
  )
}

export default Test
