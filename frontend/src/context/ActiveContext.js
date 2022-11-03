import { createContext, useReducer } from "react";

export const ActiveContext = createContext()

export const activeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_PLANTER':
            return {
                activeId: action.payload,
                activeName: action.payload
            }
        default:
            return state
    }
}

export const ActiveContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(activeReducer, {
        activeId: '',
        activeName: ''
    })

    

    return (
        <ActiveContext.Provider value={{...state, dispatch}}>
            {children}
        </ActiveContext.Provider>
    )
    console.log(state)
}