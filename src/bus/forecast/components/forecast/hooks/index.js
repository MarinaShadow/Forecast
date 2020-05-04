//Core
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from "moment";

// Actions
import { forecastActions } from '../../../actions';

export const useForecastFetch = () => {
    const dispatch = useDispatch();
    const [activeDay, setActiveDay] = useState(0);

    useEffect(() => {
        dispatch(forecastActions.fetchAsync());
    }, [dispatch]);

    const {
        data,
    } = useSelector((state) => state.forecast);

    const getDay = (index) => {
        dispatch(forecastActions.getCurrentDayActive(index));
        setActiveDay(index);
    };

    const formatDay = (d) => {
        return moment(d).format('dddd');
    };

    return {
        data,
        getDay,
        activeDay,
        formatDay,
    }
};