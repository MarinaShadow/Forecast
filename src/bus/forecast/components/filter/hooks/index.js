//Core
import {useDispatch, useSelector} from 'react-redux';
import {forecastActions} from "../../../actions";


export const useFilter = () => {
    const dispatch = useDispatch();

    const filtration = (values) => {
        const getValue = {
            minTemperature: values.minTemperature,
            maxTemperature: values.maxTemperature,
            type:  values.type,
        };

        dispatch(forecastActions.getFilter(getValue));
    };

    const reset = () => {
        dispatch(forecastActions.fetchAsync());
    };

    const {
        submitting,
    } = useSelector((state) => state.forecast);


    return {
        filtration,
        reset,
        submitting,
    }
};