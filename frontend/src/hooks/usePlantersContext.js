import { PlanterContext } from '../context/PlanterContext'
import { useContext } from 'react'

export const usePlantersContext = () => {
    const context = useContext(PlanterContext)

    if (!context) {
        throw Error('usePlantersContext must be used inside a PlantersContextProvider')
    }

    return context
}