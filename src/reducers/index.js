import { combineReducers } from 'redux'
import {
  SET_VISIBILITY,
  FETCH_CHANNELS_BEGIN,
  FETCH_CHANNELS_SUCCESS,
  FETCH_CHANNELS_FAIL } from '../actions'

const visibilityReducer = (state='all', action) => {
  switch (action.type) {
    case SET_VISIBILITY:
      return action.visible
    default:
      return state
  }
}

const channelsReducer = (state = {
  channels: [],
  fetching: false,
  msg: null
}, action) => {
  switch (action.type) {
    case FETCH_CHANNELS_BEGIN:
      return Object.assign({}, state, {
        fetching: action.fetching
      })
    case FETCH_CHANNELS_SUCCESS:
      return Object.assign({}, state, {
        fetching: action.fetching,
        channels: [...state.channels, action.chanel],
        msg: action.msg
      })
    case FETCH_CHANNELS_FAIL:
      return Object.assign({}, state, {
        fetching: action.fetching,
        msg: action.msg
      })
    default:
      return state
  }
}

const reducer = combineReducers({
  data: channelsReducer,
  visible: visibilityReducer
})

export default reducer
