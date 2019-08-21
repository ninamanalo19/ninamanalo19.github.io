import React from 'react';
import homeTop from './home-top.jpg'
import CustomHeader from './Header.js'
import CustomFooter from './Footer.js'
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;


class Home extends React.Component {

  render() {
    return (
      <Layout style={{ backgroundImage: "url(" + homeTop + ")", backgroundColor: "white" }}>
        <Header>
          <CustomHeader {...this.props}/>
        </Header>
        <Content className="content-center">
          <span style={{ fontWeight: '700', color: 'white', fontSize: '20px'}}>Hi! I am Niña Manalo</span>
          <span style={{ fontWeight: '900', color: 'white', fontSize: '40px'}}>Mobile App Developer</span>
        </Content>
        <Footer>
          <CustomFooter {...this.props}/>
        </Footer>
      </Layout>
    )
  }
}

export default Home;
