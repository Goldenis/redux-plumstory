import React from 'react';
import cookie from 'react-cookie'
import ReactDOM from 'react-dom';
import {addLocaleData, FormattedMessage} from 'react-intl'
import {Provider}from 'react-redux'
import {IntlProvider, intlReducer} from 'react-intl-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import en from 'react-intl/locale-data/en';
import he from 'react-intl/locale-data/he';
import configureStore from './store/configureStore';
import { Router, Route, browserHistory } from 'react-router'
import inti from './locale-data/index.js'
import Notifications from 'react-notification-system-redux';

addLocaleData([...en, he]);
const initialState = {
  intl: {
    defaultLocale: "en",
    locale: "en",
    messages: inti.en
  },
  user: {
    token: cookie.load('token')
  }
}

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(initialState);//preloadedState

import routes from './routes'

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      {routes(store)}
    </IntlProvider>
  </Provider>
,document.getElementById('root'))
