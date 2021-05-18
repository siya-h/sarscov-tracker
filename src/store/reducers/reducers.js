export const dataReducer = (state = [], action) => {
    const {type, payload} = action
    switch (type) {
        case 'DATA_REQUEST_SUCCESS':
            return payload
        default:
            return state
    }
}

export const loadingReducer  = (state = true, action) => {
    const { type } = action
    switch (type) {
        case 'loading':
            return true
        case 'notLoading':
            return false
        default:
            return state;
    }
}