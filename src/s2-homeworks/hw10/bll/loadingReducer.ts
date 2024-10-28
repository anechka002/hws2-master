const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionsType): typeof initState => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export type ActionsType = 
    | ReturnType<typeof loadingAC>

// type LoadingActionType = {
//     type: 'CHANGE_LOADING'
//     isLoading: boolean
// }

export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE_LOADING',
    isLoading,
} as const)
