import {UserType} from '../HW8'

const initialPeople: Array<UserType> = []

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType> = initialPeople, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedItems = action.payload === 'up' ? 1 : -1;
            return [...state].sort((a, b) => 
                (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1) * sortedItems
            )
        }
        case 'check': {
            const currentItems = state.filter(el => el.age >= action.payload)
            return currentItems // need to fix
        }
        default:
            return state
    }
}

