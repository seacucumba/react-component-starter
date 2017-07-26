/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Component from './index';
import './styles/styles.scss';

render(
  <AppContainer>
    <Component />
  </AppContainer>,
  document.getElementById('app')
);
