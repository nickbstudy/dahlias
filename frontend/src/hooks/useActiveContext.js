import { ActiveContext } from '../context/ActiveContext'
import { useContext } from 'react'

export const useActiveContext = () => {
    const context = useContext(ActiveContext)

    if (!context) {
        throw Error('useActiveContext must be used inside a ActiveContextProvider')
    }

    return context
}