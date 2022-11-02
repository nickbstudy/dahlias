import React from 'react'
import white from './images/white.png'

const Location = () => {
  return (
    <>
      <div style={{width: "100px", height: '140px', margin: '10px', border: '1px solid black', 
                   display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',}}>
        <img src={white} alt="empty" />
        <p>Plant name here</p>
      </div>
    </>
  )
}

export default Location