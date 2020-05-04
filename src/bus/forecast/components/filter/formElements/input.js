// Core
import React from 'react';
import {useField} from 'formik';

export const Input = ({label, ...props}) => {
    const [field] = useField(props);
    return (
        <>
            <p className="custom-input">
                <label className="label" htmlFor={props.id || props.name}>{label}</label>
                <input
                    {...field}
                    {...props}
                />
            </p>
        </>
    )
};
