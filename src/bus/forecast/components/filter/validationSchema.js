// Core
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    minTemperature: Yup.string()
        .max(5, 'Min temperature is too long')
        .matches(/^[0-9]*[.,]?[0-9]+$/, 'Min temperature must be number'),
    maxTemperature: Yup.string()
        .max(5, 'Max temperature is too long')
        .matches(/^[0-9]*[.,]?[0-9]+$/, 'Min temperature must be number'),
    type: Yup.string()
        .oneOf(['cloudy', 'sunny', 'Dribble', 'rainy'], 'You should put correct type'),

});