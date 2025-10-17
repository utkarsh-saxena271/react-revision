import React, { useState } from 'react'

const Create = (props) => {
    const [message, setMessage] = useState("");
    const submitHandler = (e)=>{
        e.preventDefault()
        const newList = [message]
    }
  return (
     <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter something"
          onChange={(e) => {setMessage(e.target.value);}}
          value={message}
        />
        <button>
          Submit
        </button>
      </form>
    </>
  )
}

export default Create