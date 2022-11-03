import { useEffect } from 'react'
import { useActiveContext } from '../hooks/useActiveContext'
import PlanterForm from './PlanterForm'
import white from './images/white.png'


const Planter = () => {

  const { active } = useActiveContext()

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function dropped(e) {
    
  }


  let locations = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
                     'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 
                     'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']

  

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{height: '507px', width: '1500px', margin: '0px', backgroundColor: "#fff", color: "#000", borderRight: '2px solid green',
                  display: 'grid', gridTemplateRows: '1fr 1fr 1fr', gridTemplateAreas: `"top" "mid" "bot" `  }}>
      
      <div style={{paddingTop: '5px', gridArea: 'top', backgroundColor: "#d1d1d1", display: 'flex', justifyContent: 'space-evenly'}}>
        {locations.map((loc, index) => {
          if(index < 10) return <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: "center", textAlign: 'center'}}>
            <img src={white} alt={index} style={{width: '116px', height: '116px'}} onDragOver={allowDrop} onDrop={dropped} />{loc}</div>
        })}
      </div>
      <div style={{padding: '5px 60px', gridArea: 'mid', backgroundColor: "#ababab", display: 'flex', justifyContent:'space-evenly'}}>
        {locations.map((loc, index) => {
          if(index >= 10 && index < 19) return <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: "center", textAlign: 'center'}}>
            <img src={white} alt={index} style={{width: '116px', height: '116px'}} onDragOver={allowDrop} onDrop={dropped} />{loc}</div>
        })}
      </div>
      <div style={{paddingTop: '5px', gridArea: 'bot', backgroundColor: "#8c8c8c", display: 'flex', justifyContent:'space-evenly'}}>
        {locations.map((loc, index) => {
          if(index >= 19) return <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: "center", textAlign: 'center'}}>
            <img src={white} alt={index} style={{width: '116px', height: '116px'}} onDragOver={allowDrop} onDrop={dropped} />{loc}</div>
        })}
      </div>
      


      </div>
      <PlanterForm />
    </div>
  )
}

export default Planter