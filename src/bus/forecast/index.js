import React from 'react';

import '../../source/styles/index.scss';
// Components
import { Filter } from './components/filter';
import { Head } from './components/head';
import { CurrentWeather } from './components/currentWeather';
import { Forecast } from './components/forecast';

export const Source = () => {
  return (
    <>
      <main>
        <Filter />
        <Head />
        <CurrentWeather />
        <Forecast />
      </main>
    </>
  );
};
