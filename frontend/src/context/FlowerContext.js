import { createContext, useReducer } from 'react'

export const FlowerContext = createContext()

export const flowerReducer = (state, action) => {
    switch (action.type) {
        case 'PICKUP_FLOWER':
            console.log('picked up')
            return {picked: action.payload}
        case 'PLANT_FLOWER':
            return {picked: null}
        default:
            return state;
                
    }
}

export const FlowerContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(flowerReducer, {
        picked: ''
        // locations: ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
        //             'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 
        //             'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    })
    console.log('FlowerState: ', state)

    return (
        <FlowerContext.Provider value={{...state, dispatch}}>
            {children}
        </FlowerContext.Provider>
    )
}
