// Core
import React from "react";
import { Formik, Form } from 'formik';

// Form Elements
import { Input } from './formElements/input';
import { TypeWeather } from './formElements/checkboxTypeWeather';

// Hooks
import { useFilter } from './hooks';

// Initial values for out Form
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';



export const Filter = () => {
    const { filtration, reset, submitting } = useFilter();
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={filtration}
        >
            {({ values, isValid, setValues, dirty }) => {
                const clearFilter = () => {
                    setValues({...values, ...initialValues});
                    reset();
                };
                return (
                    <Form>
                        <div className="filter">
                            <TypeWeather submitting={submitting} />
                            <Input
                                type="text"
                                name="minTemperature"
                                id="min-temperature"
                                label="Минимальная температура"
                                disabled={submitting}
                            />
                            <Input
                                type="text"
                                name="maxTemperature"
                                id="max-temperature"
                                label="Максимальная температура"
                                disabled={submitting}
                            />
                            <button
                                type={!submitting ? 'submit' : 'button'}
                                disabled={!dirty || !isValid}
                                onClick={() => submitting && clearFilter()}
                            >
                                {!submitting ? 'Отфильтровать' : 'Сбросить'}
                            </button>
                        </div>
                    </Form>
                    )}}
        </Formik>
    )
};