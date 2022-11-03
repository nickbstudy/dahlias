import { ActiveContext } from '../context/ActiveContext'
import { useContext } from 'react'

export const useActiveContext = () => {
    const context = useContext(ActiveContext)

    if (!context) {
        throw Error('usePlantersContext must be used inside a PlantersContextProvider')
    }

    return context
}