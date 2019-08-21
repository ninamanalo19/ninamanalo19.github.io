import React from 'react';

import { Menu, notification } from 'antd';

class CustomHeader extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentMenu: ""
    };
  }

  selectMenu = e => {
    this.setState({
      currentMenu: e.key,
    });
    if (e.key === "home") {
      this.props.history.push({
        pathname: "/",
      });
    }
  };

  componentDidMount() {
    if (this.props.location.pathname === "/") {
      this.setState({
        currentMenu: "home"
      })
    }
    setTimeout(function () {
      notification.open({
        message: 'Warning',
        description:
          'This site is under construction and should not be considered as its final form.'
      });
    }, 1000);
  }

  render() {
    return (
      <div className="header-parent">
        <span style={{ fontWeight: '700' }}>
        Nina Manalo
        </span>
        <Menu onClick={this.selectMenu} selectedKeys={[this.state.currentMenu]} mode="horizontal" style={{background:"transparent", border: "none"}}>
          <Menu.Item key="home">
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key="about-me">
            About Me
          </Menu.Item>
          <Menu.Item key="service">
            Service
          </Menu.Item>
          <Menu.Item key="contact">
            Contact
          </Menu.Item>
        </Menu>
      </div>

    )
  }
}

export default CustomHeader;
