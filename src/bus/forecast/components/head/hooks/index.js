//Core
import { useSelector } from 'react-redux';
import moment from "moment";

export const useHeader = () => {

    const formatWeekDay = (d) => {
        return moment(d).format('dddd');
    };
    const formatDay = (d) => {
        return moment(d).format('DD MMMM');
    };

    const {
        currentDay,
        data,
    } = useSelector((state) => state.forecast);

    const type = currentDay && currentDay.type;
    const day = currentDay && currentDay.day;

    const showHeader = data && data.length > 0;

    return {
        type,
        day,
        formatWeekDay,
        formatDay,
        showHeader,
    }
};