import { useEffect } from 'react'
import { usePlantersContext } from '../hooks/usePlantersContext'
import PlanterForm from './PlanterForm'


const Planter = () => {


  // useEffect(() => {
  //   const fetchFlowers = async () => {
  //     const response 
  //   }
  // })

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{height: '507px', width: '1500px', margin: '0px', backgroundColor: "#fff", color: "#000", borderRight: '2px solid green'}}>
      
      </div>
      
      <PlanterForm />
      
    </div>
  )
}

export default Planter