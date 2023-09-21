"use client";
import React, { useState } from 'react'
import Emoji from '../components/Emoji'

//React functional component
const NextJSTutorial = () => {
    //Logic, functions, data goes
    const firstName = "Matheus"


    const [lastName, setLastName] = useState("Rodrigues")
    
    const handleSubmit = async () => {

      const response = await fetch('api/next',{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ key : "Some message", lastName })
      })

      const responseJSON = await response.json();

      console.log(responseJSON)
    }


    
    //each components returns some jsx => allow us to write html in React BETTER!
  return (
    <div>
      <p>This is where the page appears</p>
      <p>Tailwind css is awesome</p>
        <p className="text-rose-500">{firstName}</p>


        {/*STATE */}
        <div className='flex flex-col space-y-4 '>
          <div>
            <p>
              My last name is: {lastName}
            </p>
            <input type="text"
            className='outline w-32 rounded-md'
            onChange={(e)=>{
              setLastName(e.target.value)
            }} />

            <button onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>

        <Emoji color="red"/>
    </div>
  )
}

export default NextJSTutorial
