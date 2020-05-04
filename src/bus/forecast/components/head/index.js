// Core
import React from "react";
import cx from "classnames";
//Hooks
import { useHeader } from './hooks'


export const Head = () => {
    const {type, day, formatWeekDay, formatDay, showHeader} = useHeader();

    const styleCX = cx({
        'icon': true,
        [`${type}`]: true,
    });

    return (
        showHeader &&
        <div className="head">
            <div className={styleCX}></div>
            <div className="current-date">
                <p>{formatWeekDay(day)}</p>
                <span>{formatDay(day)}</span>
            </div>
        </div>
    )
};