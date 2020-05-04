// Core
import React from "react";
// Hooks
import { useCurrentWeather } from './hooks';


export const CurrentWeather = () => {
    const {temperature, rainProbability, humidity, showWeather} = useCurrentWeather();

    return (
        showWeather &&
        <div className="current-weather">
            <p className="temperature">{temperature}</p>
            <p className="meta">
                <span className="rainy">%{rainProbability}</span>
                <span className="humidity">%{humidity}</span>
            </p>
        </div>
    )
};