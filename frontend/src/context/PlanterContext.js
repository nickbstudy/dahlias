import { createContext, useReducer } from "react";

export const PlanterContext = createContext()

export const plantersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PLANTERS':
            return {
                planters: action.payload
            }
        case 'CREATE_PLANTER':
            return {
                planters: [action.payload, ...state.planters]
            }
        case 'SET_ACTIVE_PLANTER':
            console.log(`Setting active planter to ${action.payload}`)
            return {
                activeId: action.payload
                
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