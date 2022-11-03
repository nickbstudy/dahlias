import { useState, useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { usePlantersContext } from '../hooks/usePlantersContext'


const PlanterForm = () => {

    const [newName, setNewName] = useState('')
    const [error, setError] = useState(null)
    const [planters, setPlanters] = useState(null)

    function clicked(e) {
        const bedToLoad = e.target.innerText
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const planter = {planterName: newName}

        const response = await fetch('/api/planters', {
            method: 'POST',
            body: JSON.stringify(planter),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            console.log('new planter added', json)
            setNewName('')
        }
    }

    useEffect(() => {
        const fetchPlanters = async () => {
            const response = await fetch('/api/planters')
            const json = await response.json()

            if (response.ok) {
                setPlanters(json)
            }
        }

        fetchPlanters()
    }, [])
  return (
    <div style={{width: '410px', height: '503px', overflowY: 'auto'}}>
        <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Planter:</h3>
        <input type="text" onChange={(e) => setNewName(e.target.value)} value={newName} />
        <button>Create</button>
        </form>

        <div style={{overflowY: 'hidden'}}>
        <ListGroup>
            {planters && planters.map((bed) => (
                <ListGroup.Item key={bed._id} action onClick={clicked} >{bed.planterName}</ListGroup.Item>
            ))}            
        </ListGroup>
        </div>
        

    </div>

  )
}

export default PlanterForm