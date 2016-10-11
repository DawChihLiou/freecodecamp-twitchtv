import React from 'react'
import VisibilityFilter from '../containers/VisibilityFilter'

const FilterList = () => {
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-2 col-xs-offset-3">
        <VisibilityFilter filter="SHOW_ALL">
          All
        </VisibilityFilter>
        <VisibilityFilter filter="SHOW_ACTIVE">
          Active
        </VisibilityFilter>
        <VisibilityFilter filter="SHOW_INACTIVE">
          Inactive
        </VisibilityFilter>
      </div>
    </div>
  </div>
}
