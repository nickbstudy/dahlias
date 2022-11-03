import { useState, useEffect } from 'react'
import { useActiveContext } from '../hooks/useActiveContext'
import { usePlantersContext } from '../hooks/usePlantersContext'
import PlanterBeds from './PlanterBeds'


const PlanterForm = () => {

    const { dispatch } = usePlantersContext()
    // const { activeName } = useActiveContext()


    const [newName, setNewName] = useState('')
    // const [planters, setPlanters] = useState(null)

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
            alert(json.error)
        }
        if (response.ok) {
            console.log('new planter added', json)
            setNewName('')
            dispatch({type: "CREATE_PLANTER", payload: json})
        }
    }



    
  return (
    <div style={{width: '410px', height: '503px', overflowY: 'auto'}}>
        <form className="create" onSubmit={handleSubmit}>
        <h3 id="title">Add a New Planter:</h3>
        <input type="text" onChange={(e) => setNewName(e.target.value)} value={newName} />
        <button>Create</button>
        </form>
        <PlanterBeds />
    </div>

  )
}

export default PlanterForm