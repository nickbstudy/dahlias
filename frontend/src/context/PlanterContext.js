import { createContext, useReducer } from "react";

export const PlanterContext = createContext()

export const plantersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PLANTERS':
            return {
                planters: action.payload
            }
        case 'UPDATE_PLANTER':
            return {
                planters: [action.payload, ...state.planters]
            }
        default:
            return state
    }
}

export const PlantersContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(plantersReducer, {
        planters: null,
        activeId: ''
    })

    

    return (
        <PlanterContext.Provider value={{...state, dispatch}}>
            {children}
        </PlanterContext.Provider>
    )
}