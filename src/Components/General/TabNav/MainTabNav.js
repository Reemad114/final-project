import React from 'react';
import MainTabItems from './MainTabItems.js';
import TabItem from './TabItem.js'
import './MainTabNav.css'

class MainTabNav extends React.Component{
  render() {
    const maintabcomponents = MainTabItems.map(item =>
        <TabItem
          className = {item.className}
          aClassName = {item.a.className}
          datatoggle = {item.a.datatoggle}
          href = {item.a.href}
          icon = {item.a.icon}
          title = {item.a.title}
          />
        )
    return (
        <ul id="main-tabs" className="nav nav-tabs mt-5">
          {maintabcomponents}
        </ul>
    );
  }
}
export default MainTabNav
