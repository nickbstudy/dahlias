import { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { usePlantersContext } from '../hooks/usePlantersContext'
import { useActiveContext } from '../hooks/useActiveContext'

const PlanterBeds = () => {

    const { planters, dispatch } = usePlantersContext()
    const { dispatch: activeDispatch } = useActiveContext()

    function clicked(e) {
        const bedToLoad = e.target.innerText
        activeDispatch({type: 'SET_ACTIVE_PLANTER', payload: bedToLoad})
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
    }, [dispatch])

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