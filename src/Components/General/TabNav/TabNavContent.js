import React from 'react';
import TabContent from './tabcontents.js';
import TabItemContent from './itemtabcontent.js';

class TabNavContent extends React.Component{
  render() {
    const tabcontent = TabContent.map(item =>
        <TabItemContent
          id = {item.id}
          className = {item.className}
          content = {item.content}
          />
        )
    return (
      <div className="tab-content">
        {tabcontent}
      </div>
    );
  }
}
export default TabNavContent
