import { connect } from 'react-redux'
import { setVisibility } from '../actions'
import Filter from '../components/Filter'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibility
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibility(ownProps.filter))
    }
  }
}

const VisibilityFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default VisibilityFilter
