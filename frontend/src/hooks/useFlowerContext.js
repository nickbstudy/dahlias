import { FlowerContext } from '../context/FlowerContext'
import { useContext } from 'react'

export const useFlowerContext = () => {
    const context = useContext(FlowerContext)

    if (!context) {
        throw Error('useFlowerContext must be used inside a FlowerContextProvider')
    }

    return context
}