import React from 'react'
import VisibleChannelList from './VisibleChannelList'
import FilterList from '../components/FilterList'
import '../App.css'

const TwitchViewer = () => {
  return (
    <div className="container">
      <FilterList />
      <VisibleChannelList />
    </div>
  );
};

export default TwitchViewer;
