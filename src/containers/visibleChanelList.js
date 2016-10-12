import { connect } from 'react-redux'
import { ChanelList } from '../components/ChanelList'

const getVisibleChanels = (chanels, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return chanels;
    case 'SHOW_ACTIVE':
      return chanels.filter(c => c.active);
    case 'SHOW_INACTIVE':
      return chanels.filter(c => !c.active);
  }
}

const mapStateToProps = (state) => {
  return {
    chanels: getVisibleChanels(state.chanels, state.vibility)
  }
}

const VisibleChanelList = connect(
  mapStateToProps
)(ChanelList)

export default VisibleChanelList
