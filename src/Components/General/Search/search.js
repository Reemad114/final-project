import React from 'react';
import MainTabNav from "../TabNav/MainTabNav.js";
import TabNavContent from "../TabNav/TabNavContent.js";
import './search.css'

class Search extends React.Component{
  render() {
    return (
      <div className="search shadow mx-5 mt-5 p-2">
        <MainTabNav />
        <TabNavContent />
      </div>
    )
  }
}
export default Search
