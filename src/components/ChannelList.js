import React from 'react'
import Channel from './Channel'

const ChannelList = (props) => (
  <div className="container-fluid margin-top text-center">
    { props.fetching && <span className="glyphicon glyphicon-refresh spin" aria-hidden="true"></span> }
    { !props.fetching && props.channels.map(channel =>
      <Channel
        title={ channel.name }
        img={ channel.img }
        status={ channel.status }
        url={ channel.url }
        game={ channel.game }
      />
    )}
  </div>
)

export default ChannelList
