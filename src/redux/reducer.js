import actionTypes from './actionTypes';

const INITIAL_STATE = {
    currentTab: 0,
    pinCode: "",
    location: {
        states: [],
        cities: []
    },
    centers: [],
    loading: true,
    error: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TAB:
            return {
                ...state,
                currentTab: action.payload
            };

        case actionTypes.UPDATE_PIN:
            return {
                ...state,
                pinCode: action.payload
            };

        case actionTypes.ADD_STATE:
            return {
                ...state,
                location: { ...state.location, states: action.payload }
            }

        case actionTypes.ADD_CITY:
            return {
                ...state,
                location: { ...state.location, cities: action.payload }
            }

        case actionTypes.ADD_CENTERS:
            return {
                ...state,
                centers: action.payload,
                loading: false
            }
        case actionTypes.TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case actionTypes.TOGGLE_ERROR:
            return {
                ...state,
                error: !state.error,
                loading: !state.loading
            }
        default:
            return state;
    }
}

export default reducer;
