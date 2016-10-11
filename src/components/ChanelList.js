import React, { PropTypes } from 'react'
import Chanel from './Chanel'

const ChanelList = (props) => {
  <div className="container-fluid">
    {props.chanels.map(chanel =>
      <Chanel
        key={ chanel.id }
        { ...chanel }
      />
    )}
  </div>
}

ChanelList.propTypes = {
  chanels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequried
  ).isRequired
}

export default ChanelList
