import React from 'react'
import VisibleChannelList from './VisibleChannelList'
import FilterList from '../components/FilterList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

const TwitchViewer = () => {
  return (
    <div className="container">
      <Header />
      <FilterList />
      <VisibleChannelList />
      <Footer />
    </div>
  );
};

export default TwitchViewer;
