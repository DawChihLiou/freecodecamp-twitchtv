import React, { PropTypes } from 'react'

const Filter = (props) => {
  if (props.active) {
    return (
      <span>{ props.children }</span>
    )
  }

  return (
    <a
      href="#"
      onClick={ e => {
          e.preventDefault()
          onClick()
      }}
    >
      { props.children }
    </a>
  )
}

Filter.propTypes = {
  active: PropTypes.string.required,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Filter
