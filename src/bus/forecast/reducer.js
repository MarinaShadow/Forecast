// Types
import { types } from './types';

import moment from "moment";

const initialState = {
    data: null,
    isFetching: false,
    error: null,
    currentDay: null,
    submitting: false,
};

const getData = (payloadNew) => payloadNew.map(d=> d && {...d, day: moment(d.day).utc()});

const filteredData = (stateCurrent, payloadNew) => {
    return stateCurrent.data.filter(d=> (payloadNew.type !== '') ? (d.type === payloadNew.type) : d)
        .filter(d=> (payloadNew.minTemperature !== '') ? d.temperature >= payloadNew.minTemperature : d)
        .filter(d=> (payloadNew.maxTemperature !== '') ? d.temperature <= payloadNew.maxTemperature : d);
};


export const forecastReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case types.FORECAST_START_FETCHING:
            return { ...state, isFetching: true };
        case types.FORECAST_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.FORECAST_SET_FETCHING_ERROR:
            return { ...state, error: payload, isFetching: false, data: null };
        case types.FORECAST_FILL:
            return { ...state, data: getData(payload), currentDay: getData(payload)[0], submitting: false, error: null };
        case types.FORECAST_GET_CURRENT_DAY:
            return { ...state, currentDay: state.data.find((d, index)=> index === payload), error: null };
        case types.FORECAST_GET_FILTER:
            return { ...state, data: filteredData(state, payload),  currentDay: filteredData(state, payload)[0], submitting: true,  error: null };
        default:
            return state;
    }
};