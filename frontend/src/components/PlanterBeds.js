import { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { usePlantersContext } from '../hooks/usePlantersContext'
import { useActiveContext } from '../hooks/useActiveContext'
import { useGardenContext } from '../hooks/useGardenContext'

const PlanterBeds = () => {

    const { planters, dispatch } = usePlantersContext()
    const { activeName, activeId, dispatch: activeDispatch } = useActiveContext()
    const { dispatch: gardenDispatch } = useGardenContext()

    async function clicked(e) {


        const bedToLoad = {
            nameToFind: e.target.innerText
        }
        const response = await fetch('/api/plantersid', {
            method: 'POST',
            body: JSON.stringify(bedToLoad),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        const newPayload = {
            activeId: json._id,
            activeName: bedToLoad.nameToFind
        }

        activeDispatch({type: 'SET_ACTIVE_PLANTER', payload: newPayload})
        const gardenPayload = {
            bedId: json._id
        }
        const gardenResponse = await fetch('/api/flowersid', {
            method: 'POST',
            body: JSON.stringify(gardenPayload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const gardenJson = await gardenResponse.json()
        
        const plantedBeds = gardenJson.map((flower) => {
            return {
                flowerName: flower.flowerName,
                flowerLocation: flower.location
            }
        })
        console.log('coming from PlanterBeds to SET_GARDEN:')
        console.log(plantedBeds)
        gardenDispatch({type: 'SET_GARDEN', payload: plantedBeds})

    }

    useEffect(() => {
        const fetchPlanters = async () => {
            const response = await fetch('/api/planters')
            const json = await response.json()

            if (response.ok) {
                // setPlanters(json)   ---- using old state
                dispatch({type: 'SET_PLANTERS', payload: json})
            }
        }

        fetchPlanters()
    }, [dispatch, planters])

  return (
    <div style={{overflowY: 'hidden'}}>
        <ListGroup>
            {planters && planters.map((bed) => (
                <ListGroup.Item key={bed._id} variant="success" action onClick={clicked} >{bed.planterName}</ListGroup.Item>
            ))}            
        </ListGroup>
    </div>
  )
}

export default PlanterBeds