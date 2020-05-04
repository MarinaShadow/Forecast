// Core
import React from "react";
import cx from 'classnames';

//Hooks
import { useForecastFetch } from './hooks'



export const Forecast = () => {
    const { data, getDay, activeDay, formatDay } = useForecastFetch();

    return (
        <div className="forecast">
            {data && data.length > 0 ? data.filter((day, index) => index < 7).map((day, index)=>{
                const styleCX = cx({
                    'day': true,
                    'selected': index === activeDay,
                    [`${day.type}`]: true,
                });
                return (
                    <div
                        key={index}
                        className={styleCX}
                        onClick={() => getDay(index)}
                    >
                        <p>{formatDay(day.day)}</p>
                        <span>{day.temperature}</span>
                    </div>
                )
            }) :
                <p className="message">По заданным критериям нет доступных дней!</p>
            }
        </div>
    )
};