import React from 'react';
import Menu from '../../General/Menu/menu.js';

class Header extends React.Component{
  render() {
    return (
      <div className="header container-fluid">
        <Menu />
      </div>
    );
  }
}
export default Header
