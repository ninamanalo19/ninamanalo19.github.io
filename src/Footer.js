import React from 'react';
import { Icon } from 'antd';

class CustomFooter extends React.Component {
  render() {
    return (
      <div className="content-column">
        Contact Me
        <div style={{ display: 'inline'}}>
          <Icon style={{ marginRight: '8px' }} type="mail" />
          <a href="mailto:nina.manalo19@gmail.com">nina.manalo19@gmail.com</a>
        </div>
      </div>
    )
  }
}

export default CustomFooter;
