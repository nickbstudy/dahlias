import { useEffect, useState } from 'react'
import { useActiveContext } from '../hooks/useActiveContext'
import { useFlowerContext } from '../hooks/useFlowerContext'
import { useGardenContext } from '../hooks/useGardenContext'
import PlanterForm from './PlanterForm'
import white from './images/white.png'
import allDahlias from './choices'


const Planter = () => {

  // let defLocations = []

  // for (let i = 0; i < 29; i++) {
  //   defLocations.push({flowerName: 'empty', imageSrc: white})
  // }
  const { picked } = useFlowerContext()
  const { activeId } = useActiveContext()
  const { locations, dispatch} = useGardenContext()
  const [inlineLocations, setInlineLocations] = useState([])
  const [locSource, setLocSource] = useState([])

  function allowDrop(ev) {
    ev.preventDefault();
  }

  async function dropped(e) {
    
    console.log(picked)
    const flower = {
      flowerName: picked,
      location: e.target.alt,
      bedId: activeId
    }

    console.log(flower)

    const response = await fetch('/api/flowers', {
        method: 'POST',
        body: JSON.stringify(flower),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()

    if (!response.ok) {
        alert(json.error)
    }
    if (response.ok) {
        // console.log('new flower added', json)
        // console.log(picked)
        // locations[json.location].flowerName = picked
        // const newPic = allDahlias.find(item => item.title === picked)
        // locations[json.location].imageSrc = newPic.fileName
        // e.target.src = newPic.fileName
        dispatch({type: 'UPDATE_GARDEN', payload: flower})
    }

  }


  useEffect(() => {

    
    setInlineLocations(locations)

    // console.log('new inlineLocations:')
    // console.log(inlineLocations)
    if (inlineLocations.length > 20) {
    const findLocSource = inlineLocations.map((spot) => {
      // console.log(`index ${index} spot:`)
      // console.log(spot)
      if (spot == 'empty') {
        return white
        
      } else {
        var result = allDahlias.find(thing => thing.title === spot)
        return result.fileName
      }
    })
    setLocSource(findLocSource)
    }
    
    // setLocSource(findLocSource)
    // console.log('locSource:')
    // console.log(locSource)
    


  }, [locations, dispatch, inlineLocations])

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{height: '507px', width: '1500px', margin: '0px', backgroundColor: "#fff", color: "#000", borderRight: '2px solid green',
                  display: 'grid', gridTemplateRows: '1fr 1fr 1fr', gridTemplateAreas: `"top" "mid" "bot" `  }}>
      
      <div style={{paddingTop: '5px', gridArea: 'top', backgroundColor: "#f5ebe1", display: 'flex', justifyContent: 'space-evenly'}}>
        {inlineLocations.map((loc, index) => {
          if(index < 10) return <div key={index} style={{width: '146px', display: 'flex', flexDirection: 'column', alignItems: "center", textAlign: 'center'}}>
            <img src={locSource[index]} alt={index} style={{width: '116px', height: '116px'}} onDragOver={allowDrop} onDrop={dropped} />{loc}</div>
        })}
      </div>
      <div style={{padding: '5px 60px', gridArea: 'mid', backgroundColor: "#f5ebe1", display: 'flex', justifyContent:'space-evenly'}}>
      {inlineLocations.map((loc, index) => {
          if(index >= 10 && index < 19) return <div key={index} style={{width: '146px', display: 'flex', flexDirection: 'column', alignItems: "center", textAlign: 'center'}}>
            <img src={locSource[index]} alt={index} style={{width: '116px', height: '116px'}} onDragOver={allowDrop} onDrop={dropped} />{loc}</div>
        })}
      </div>
      <div style={{paddingTop: '5px', gridArea: 'bot', backgroundColor: "#f5ebe1", display: 'flex', justifyContent:'space-evenly'}}>
        {inlineLocations.map((loc, index) => {
          if(index >= 19) return <div key={index} style={{width: '146px', display: 'flex', flexDirection: 'column', alignItems: "center", textAlign: 'center'}}>
            <img src={locSource[index]} alt={index} style={{width: '116px', height: '116px'}} onDragOver={allowDrop} onDrop={dropped} />{loc}</div>
        })}
      </div>
      


      </div>
      <PlanterForm />
    </div>
  )
}

export default Planter