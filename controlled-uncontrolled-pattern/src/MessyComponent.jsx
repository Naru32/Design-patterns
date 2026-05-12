import React, { useRef, useState } from 'react'

function MessyComponent() {
   const [name,setName] = useState('')
   const [email,setEmail] = useState('')
   const messageRef = useRef()

   const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('Name', name);
    console.log('Email', email);
    console.log('message', messageRef.current.value);
   }
  return (
    <>
    <h1>Uncontrolled component</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" name="fname" id="fname" placeholder='Enter Name' onChange={(e)=> setName(e.target.value)}/>
        <input type="email" name="email" id="email" placeholder='Enter email' onChange={(e)=> setEmail(e.target.value)}/>
        <input type="text" name="" id="" placeholder='Write message here' ref={messageRef} />
        <button>Submit</button>
    </form>

    </>
  )
}

export default MessyComponent;