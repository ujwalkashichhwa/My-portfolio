import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BaseRoutes} from './Routes/BaseRoutes';
import 'styles/index.scss';

ReactDOM.render(
  <BrowserRouter >
    <BaseRoutes/>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
