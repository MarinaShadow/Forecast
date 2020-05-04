//Core
import { useSelector } from 'react-redux';

export const useCurrentWeather = () => {

    const {
        currentDay,
        data,
    } = useSelector((state) => state.forecast);


    const temperature = currentDay && currentDay.temperature;
    const rainProbability = currentDay && currentDay.rain_probability;
    const humidity = currentDay && currentDay.humidity;

    const showWeather = data && data.length > 0;

    return {
        temperature,
        rainProbability,
        humidity,
        showWeather,
    }
};