import { GardenContext } from '../context/GardenContext'
import { useContext } from 'react'

export const useGardenContext = () => {
    const context = useContext(GardenContext)

    if (!context) {
        throw Error('useGardenContext must be used inside a GardenContextProvider')
    }

    return context
}