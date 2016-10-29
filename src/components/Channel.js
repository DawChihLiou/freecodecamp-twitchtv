import React from 'react'

const Channel = (props) => (
  <div className="row margin-top-sm text-center card">
      <div className="col-xs-4">
        <img
          className="img-circle margin-top-sm"
          alt="channel logo"
          width="55" height="55"
          src={ props.img } />
      </div>
      <div className="col-xs-4">
        <a href={ props.url } target="blank">
          <h3 className="margin-top-sm">{ props.title }</h3>
          { props.game && <p className="margin-top-sm">{ props.game }</p> }
        </a>
      </div>
      <div className="col-xs-4">
        <h4 className="margin-top">
        { props.status === 'online' ?
            <span className="glyphicon glyphicon-ok active" aria-hidden="true"></span> : <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        }
        </h4>
      </div>
  </div>
)

export default Channel
