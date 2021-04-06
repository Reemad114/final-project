import React from 'react';
import Menu from '../../General/Menu/menu.js';
import Search from '../../General/Search/search.js'
import "./header.css";

class Header extends React.Component{
  render() {
    return (
      <div className="headerhome container-fluid">
        <Menu />
        <Search />
      </div>
    );
  }
}
export default Header
