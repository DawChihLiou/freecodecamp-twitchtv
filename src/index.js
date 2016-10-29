import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'
import TwitchViewer from './containers/TwitchViewer'
import './index.css'

const logger = createLogger()

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

const configureStore = () => {
  return createStore(
    reducer,
    applyMiddleware(...middleware)
  )
}

const store = configureStore()

render(
  <Provider store={ store }>
    <TwitchViewer />
  </Provider>,
  document.getElementById('root')
);
