import React, { PropTypes } from 'react'

const Chanel = (props) => {
  <div className="row">
    <div className="col-xs-3 col-sm-2">
      <img
        className="img-thumbnail img-circle"
        alt={props.name}
        src={ props.image }
      />
    </div>
    <div className="col-xs-9 col-sm-10">
      <div className="row">
        <div className="col-xs-12 col-sm-8">
          <p>{ props.name }</p>
        </div>
        <div className="col-xs-12 col-sm-4">
          <p>{ props.status }</p>
        </div>
      </div>
    </div>
  </div>
}

Chanel.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}

export default Chanel
