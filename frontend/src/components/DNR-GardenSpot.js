import allDahlias from "./choices";
import { useActiveContext } from "../hooks/useActiveContext";
import { useFlowerContext } from "../hooks/useFlowerContext";

const GardenSpot = (props) => {

    const { activeId } = useActiveContext()
    const { picked } = useFlowerContext()

    const locations = props.indi
    function allowDrop(ev) {
        ev.preventDefault();
      }
    
      async function dropped(e) {
        
        const flower = {
          flowerName: picked,
          location: e.target.alt,
          bedId: activeId.activeId
        }

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
            console.log('new flower added', json)
            console.log(picked)
            locations[json.location].flowerName = picked
            const newPic = allDahlias.find(item => item.title === picked)
            locations[json.location].imageSrc = newPic.fileName
        }
        console.log(locations)
    
      }


  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: "center", textAlign: 'center'}}>
    <img src={props.source} alt={props.indi} style={{width: '116px', height: '116px'}} onDragOver={allowDrop} onDrop={dropped} />{props.nom}</div>
  )
}

export default GardenSpot