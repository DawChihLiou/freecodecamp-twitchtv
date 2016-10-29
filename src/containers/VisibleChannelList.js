import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChannelList from '../components/ChannelList'
import { fetchChannels } from '../actions'

class VisibleChannelList extends Component {
  componentDidMount () {
    this.props.dispatch(fetchChannels())
  }
  render () {
    return (
      <ChannelList fetching={this.props.fetching} channels={ this.props.channels } />
    )
  }
}

const getVisibleChannels = (channels, visibility) => {
  switch(visibility) {
    case 'all':
      return channels
    case 'online':
      return channels.filter(c => c.status === 'online')
    case 'offline':
      return channels.filter(c => c.status === 'offline')
    default:
      throw new Error('unknown visibility ', visibility)
  }
}

const mapVisibleChannelListStateToProps = state => {
  const { fetching, channels, msg } = state.data || { fetching: false, channels: [], msg: null }
  return {
    fetching,
    channels: getVisibleChannels(channels, state.visible),
    msg
  }
}

export default connect(mapVisibleChannelListStateToProps)(VisibleChannelList)
