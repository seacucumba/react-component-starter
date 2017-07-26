/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './styles/styles.scss';

render(
  <AppContainer>
    <h1>Your component goes here...</h1>
  </AppContainer>,
  document.getElementById('app')
);

// if (module.hot) {
//   module.hot.accept('./components/Root', () => {
//     const NewRoot = require('./components/Root').default;
//     render(
//       <AppContainer>
//         <NewRoot/>
//       </AppContainer>,
//       document.getElementById('app')
//     );
//   });
// }
