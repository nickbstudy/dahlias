import React from 'react'

const Flower = (props) => {

    let { title, fileName } = props
  return (
    <div style={{ width: '105px', height: '142px', display: 'flex', flexDirection: 'column', alignItems: "center", 
                  textAlign: 'center'}}>
        
        <img src={fileName} alt={title} style={{width: '98px', height: '98px'}}/>
        {title}
    </div>
  )
}

export default Flower