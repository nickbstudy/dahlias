import { createContext, useReducer } from 'react'

export const GardenContext = createContext()

export const gardenReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GARDEN':

            let newGarden = []

            const toMatch = action.payload.map((i) => {
                return i.flowerLocation
            })

            const newNames = action.payload.map((j) => {
                return j.flowerName
            })
            let incThis = 0;
            console.log(toMatch)

            for (let i = 0; i < 29; i++) {
                if (toMatch.includes(i)) {
                    newGarden.push(newNames[incThis])
                    incThis++
                } else {
                    newGarden.push('empty')
                }
            }
            return {locations: newGarden}

        case 'UPDATE_GARDEN':

            const original = state.locations
            const toUpdate = action.payload.location
            const newName = action.payload.flowerName
            const updated = original.map((original, index) => {
                if (index == toUpdate) {
                    return newName
                } else {
                    return original
                }
            })
            return {locations: updated};
                
        default:
            return state;
                
    }
}

export const GardenContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(gardenReducer, {
        locations: []
    })

    return (
        <GardenContext.Provider value={{...state, dispatch}}>
            {children}
        </GardenContext.Provider>
    )
}
