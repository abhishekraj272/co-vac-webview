import actionTypes from './actionTypes';

export const changeTab = (tabIndex) => ({
    type: actionTypes.CHANGE_TAB,
    payload: tabIndex
});

export const updatePIN = (pin) => ({
    type: actionTypes.UPDATE_PIN,
    payload: pin
});

export const addCity = (cities) => ({
    type: actionTypes.ADD_CITY,
    payload: cities
});

export const addState = (states) => ({
    type: actionTypes.ADD_STATE,
    payload: states
});

export const addCenters = (centers) => ({
    type: actionTypes.ADD_CENTERS,
    payload: centers
});

export const toggleLoading = () => ({
    type: actionTypes.TOGGLE_LOADING,
});

export const toggleError = () => ({
    type: actionTypes.TOGGLE_ERROR,
});
