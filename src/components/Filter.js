import React, { PropTypes } from 'react'

const Filter = (props) => {
  if (props.active) {
    return <h3 className="active">{ props.children }</h3>
  }

  return (
    <a href="#"
      onClick={ e => {
        e.preventDefault()
        props.onClick()
      }}
    >
      <h3>{ props.children }</h3>
    </a>
  )
}

export default Filter
