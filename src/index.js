import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import twitchtvApp from './reducers'
import TwitchViewer from './components/TwitchViewer';
import './index.css';

let store = createStore(twitchtvApp)

render(
  <Provider store={ store }>
    <TwitchViewer />
  </Provider>,
  document.getElementById('root')
);
