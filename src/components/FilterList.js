import React from 'react'
import VisibilityFilter from '../containers/VisibilityFilter'

const FilterList = () => (
  <div className="container-fluid">
    <div className="row text-center">
      <div className="col-xs-4">
        <VisibilityFilter visible="all">Show All</VisibilityFilter>
      </div>
      <div className="col-xs-4">
        <VisibilityFilter visible="online">Show Online</VisibilityFilter>
      </div>
      <div className="col-xs-4">
        <VisibilityFilter visible="offline">Show Offline</VisibilityFilter>
      </div>
    </div>
  </div>
)

export default FilterList
