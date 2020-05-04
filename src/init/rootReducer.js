// Core
import { combineReducers } from 'redux';

// Reducers
import { forecastReducer as forecast } from '../bus/forecast/reducer';

export const rootReducer = combineReducers({
    forecast,
});
