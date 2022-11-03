import React from 'react'
import allDahlias from './choices'
import { useFlowerContext } from '../hooks/useFlowerContext.js'


const Dahlias = () => {

  const { dispatch } = useFlowerContext()
  
  const moving = (e) => {
    
    
    const picked = e.target.alt

    dispatch({type: 'PICKUP_FLOWER', payload: picked})

  }

  return (
    <div style={{height: '566px', width: '100%', margin: '6px 0px 0px 0px', backgroundColor: "#f2fcf3", color: "#000", display: 'flex', flexWrap: 'wrap'}}>
        {allDahlias.map((item, index) => (
            <div key={index} style={{ width: '105px', height: '142px', display: 'flex', flexDirection: 'column', alignItems: "center", textAlign: 'center'}}>
            <img key={index} src={item.fileName} alt={item.title} style={{width: '98px', height: '98px'}} draggable="true" onDragStart={moving}/>
          {item.title}
        </div>
        ))}
    </div>
  )
}
export default Dahlias