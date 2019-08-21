import React from 'react';

import CustomHeader from './Header.js'
import CustomFooter from './Footer.js'
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

class NoMatch extends React.Component {
  render() {
    return (
      <Layout>
        <Header>
          <CustomHeader {...this.props}/>
        </Header>
        <Content className="content-center">
          <span style={{ fontWeight: '900', color: 'white', fontSize: '40px'}}>Oops! Page not found. :(</span>
        </Content>
        <Footer>
          <CustomFooter {...this.props}/>
        </Footer>
      </Layout>
    )
  }
}

export default NoMatch;
