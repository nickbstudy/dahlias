import React from 'react'

const Flower = (props) => {

    let { title, fileName } = props
  return (
    <div style={{ width: '106px', height: '140px', display: 'flex', flexDirection: 'column', alignItems: "center", textAlign: 'center'}}>
        
        <img src={fileName} alt={title} style={{width: '100px', height: '100px'}}/>
        {title}
    </div>
  )
}

export default Flower