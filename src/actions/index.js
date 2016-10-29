import fetch from 'isomorphic-fetch'

export const SET_VISIBILITY         = 'SET_VISIBILITY'
export const FETCH_CHANNELS_BEGIN   = 'FETCH_CHANNELS_BEGIN'
export const FETCH_CHANNELS_SUCCESS = 'FETCH_CHANNELS_SUCCESS'
export const FETCH_CHANNELS_FAIL    = 'FETCH_CHANNELS_FAIL'

export const setVisibility = visible => {
  return {
    type: SET_VISIBILITY,
    visible
  }
}

export const fetchChannelsBegin = () => {
  return {
    type: FETCH_CHANNELS_BEGIN,
    fetching: true,
  }
}

export const fetchChannelsSuccess = chanel => {
  return {
    type: FETCH_CHANNELS_SUCCESS,
    chanel,
    fetching: false
  }
}

export const fetchChannelsFail = chanel => {
  return {
    type: FETCH_CHANNELS_FAIL,
    msg: 'Something wrong while getting the channels:(',
    fetching: false
  }
}

const fetchDummy = (dispatch, channel, imgPlaceholder) => {
  fetch(`./dummy/${channel}.json`)
    .then(res => {
      if (res.status >= 400) dispatch(fetchChannelsFail())
      return res.json()
    })
    .then(data => dispatch(fetchChannelsSuccess({
      name: channel,
      game: data.stream ? data.stream.game : null,
      img: data.stream ? data.stream.channel.logo : imgPlaceholder,
      url: data.stream? data.stream.channel.url : null,
      status: data.stream.game ? 'online' : 'offline'
    })))
}

export const fetchChannels = () => dispatch => {
  const channels       = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
  const imgPlaceholder = 'http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_image-94a42b3a13c31c02-300x300.jpeg'

  dispatch(fetchChannelsBegin())

  // fetch for each channel
  channels.forEach((channel) => {
    /*
       Fetching data from Twitch requires a Client ID.
       you can checkout https://blog.twitch.tv/client-id-required-for-kraken-api-calls-afbb8e95f843#.bmmun43oz
       to request one and make your http request as below.

       fetch(`https://api.twitch.tv/kraken/streams/${channel}`, {
         headers: { 'Client-ID': '[YOUR_CLIENT_ID]' }
       })
         .then(res => {
           if (res.status >= 400) dispatch(fetchChannelsFail())
           return res.json()
         })
         .then(data => dispatch(fetchChannelsSuccess({
           name: channel,
           game: data.stream ? data.stream.game : null,
           img: data.stream ? data.stream.channel.logo : imgPlaceholder,
           url: data.stream? data.stream.channel.url : null,
           status: data.stream ? 'online' : 'offline'
         })))

       For now, I am using dummy data to simulate the http request.
     */
     setTimeout(() => fetchDummy(dispatch, channel, imgPlaceholder), 1000)
  })
}
