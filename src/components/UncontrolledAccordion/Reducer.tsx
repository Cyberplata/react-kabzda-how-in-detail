export type ActionType = {
    type: string
}

export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT :
            state.collapsed = !state.collapsed
            console.log(state)
            return state;
        default:
            throw new Error("Bad action type")
    }
    return state;

    // if (action.type === TOGGLE_CONSTANT) {
    //     return !state
    // }
    //
    // return state
}