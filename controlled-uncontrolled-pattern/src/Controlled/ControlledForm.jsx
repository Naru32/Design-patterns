import React, { useRef, useState } from 'react'

function ControlledForm() {
const [userData,setUserData] = useState({
  fname:'',
  email:'',
  message:''
})

const nameRef = useRef(null)
const emailRef = useRef(null)
const messageRef = useRef(null)


const handleChange = (e)=>{
  const {name,value} = e.target
  setUserData({...userData,[name]:value})
}

const handleSubmit = (e)=>{
  e.preventDefault()
  if(userData.fname == ''){
   nameRef.current.focus()
   return;
  }

  if(userData.email == ''){
   emailRef.current.focus()
   return;
  }

  if(userData.message == ''){
   messageRef.current.focus()
   return;
  }
  else{
    console.log('submitted',userData)
  }
}
  return (
    <>
     <form onSubmit={handleSubmit}>
        <input type="text" name="fname" id="fname" placeholder='Enter Name' onChange={handleChange} ref={nameRef}/>
        <input type="email" name="email" id="email" placeholder='Enter email' onChange={handleChange} ref={emailRef}/>
        <input type="text" name="message" id="message" placeholder='Write message here' onChange={handleChange} ref={messageRef}/>
        <button>Submit</button>
    </form>
    </>
  )
}

export default ControlledForm