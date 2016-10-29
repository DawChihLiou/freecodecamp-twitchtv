import { connect } from 'react-redux'
import { setVisibility } from '../actions'
import Filter from '../components/Filter'

const mapStateToProps = (state, props) => {
  // takes container's state & props and return children's props
  return {
    active: props.visible === state.visible
  }
}
const mapDispatchToProps = (dispatch, props) => {
  // take dispatch & container's props and return children's props
  return {
    onClick: () => {
      dispatch(setVisibility(props.visible))
    }
  }
}
const VisibilityFilter = connect(
  mapStateToProps,
  mapDispatchToProps
) (Filter)

export default VisibilityFilter
