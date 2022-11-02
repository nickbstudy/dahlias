import React from 'react'
import allDahlias from './choices'
import Flower from './Flower'

const Dahlias = () => {

  return (
    <div style={{height: '560px', width: '100%', margin: '0px', backgroundColor: "#f2fcf3", color: "#000", display: 'flex', flexWrap: 'wrap'}}>
        {allDahlias.map((f) => {
          return <Flower key={f.title} title={f.title} fileName={f.fileName} />
        })}
    </div>
  )
}
export default Dahlias