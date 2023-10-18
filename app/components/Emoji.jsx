import React from 'react'

const Emoji = ({color}) => {
    console.log(color)
  return (
    <div className={`bg-${color}-500 text-center`}>
      
      {color==="red"? <p>The color is red</p> : <p>The color is not red</p>}
      <p></p>
    </div>
  )
}

export default Emoji
