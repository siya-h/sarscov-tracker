import { ACTIONS } from "../actions/actions"

const initialState = {
    data: [],
    error: null,
    isLoading: false
}

export const dataReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONS.REQUEST_SUCCESS:
            return { ...state, data: payload, isLoading: false }
        case ACTIONS.REQUEST_LOADING:
            return { ...state, isLoading: true }
        case ACTIONS.REQUEST_ERROR:
            return { ...state, error: payload, isLoading: false }
        default:
            return state
    }
}
