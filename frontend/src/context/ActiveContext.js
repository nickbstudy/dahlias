import { createContext, useReducer } from "react";

export const ActiveContext = createContext()

export const activeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_PLANTER':
            console.log(`Setting active planter to ${action.payload}`)
            return {
                activeId: action.payload
                
            }
        default:
            return state
    }
}

export const ActiveContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(activeReducer, {
        activeId: ''
    })

    

    return (
        <ActiveContext.Provider value={{...state, dispatch}}>
            {children}
        </ActiveContext.Provider>
    )
}