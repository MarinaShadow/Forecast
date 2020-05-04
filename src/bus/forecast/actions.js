//Types
import { types} from './types';

//API
import { api } from '../../api';

export const forecastActions = Object.freeze({
    //Sync
    startFetching: () => {
        return {
            type: types.FORECAST_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.FORECAST_STOP_FETCHING
        }
    },
    fill: (payload) => {
        return {
            type: types.FORECAST_FILL,
            payload
        }
    },
    getCurrentDay: (payload) => {
        return {
            type: types.FORECAST_GET_CURRENT_DAY,
            payload
        }
    },
    getCurrentFilter: (payload) => {
        return {
            type: types.FORECAST_GET_FILTER,
            payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.FORECAST_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    getCurrentDayActive: (id) => async (dispatch) => {
        dispatch(forecastActions.getCurrentDay(id));
    },
    getFilter: (param) => async (dispatch) => {
        dispatch(forecastActions.getCurrentFilter(param));
    },
    //Async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.FORECAST_FETCH_ASYNC
        });

        dispatch(forecastActions.startFetching());

        const response = await api.forecast.fetch();

        if (response.status === 200) {

            const results = await response.json();

            dispatch(forecastActions.fill(results.data));
        } else {
            const error = {
                status: response.status
            };

            dispatch(forecastActions.setFetchingError(error));
        }

        dispatch(forecastActions.stopFetching());
    },
});