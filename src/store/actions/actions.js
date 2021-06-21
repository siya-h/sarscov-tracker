export const ACTIONS = {
    REQUEST_SUCCESS: 'DATA_REQUEST_SUCCESS',
    REQUEST_LOADING: 'DATA_REQUEST_LOADING',
    REQUEST_ERROR: 'DATA_REQUEST_ERROR'
}

export const dataRequestSuccess = (payload) => ({type: ACTIONS.REQUEST_SUCCESS, payload})

export const dataRequestLoading = () => ({type: ACTIONS.REQUEST_LOADING})

export const dataRequestError = (payload) => ({type: ACTIONS.REQUEST_ERROR, payload})

export const WATCH_ACTIONS = {
    GET_DATA: 'GET_DATA'
}

export const getData = () => ({type: WATCH_ACTIONS.GET_DATA})


