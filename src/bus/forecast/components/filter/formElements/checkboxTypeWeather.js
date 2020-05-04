// Core
import React from 'react';
import {useFormikContext} from 'formik';
import {typeWeather} from "./typeWeather";
import cx from "classnames";

export const TypeWeather = ({submitting}) => {
    const { setFieldValue, values } = useFormikContext();
    return (
        <>
            {typeWeather.map(type => {
                const selectedCX = cx({
                    'checkbox' : true,
                    'selected': type.name === values.type,
                    'blocked': submitting,
                });
                return(
                    <span
                        key={type.name}
                        className={selectedCX}
                        onClick={() => {
                            !submitting && setFieldValue('type', type.name)
                        }}
                    >
                        {type.title}
                    </span>
                )}
            )}
        </>
    )
};
