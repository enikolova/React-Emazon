import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import './SideMenu.css';
import Login  from './Login';

export class SideMenu extends React.Component {
  state = {
    collapsed: false,
    isLoginModalVisible: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  showLoginModal= () => {
    this.setState({ isLoginModalVisible: true });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          className="page-sider"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu
            className="page-sider"
            defaultSelectedKeys={['1']}
            mode="inline"
          >
            <Menu.Item key="1" className="page-sider">
              <Icon type="rise" />
              <span>Top Books</span>
            </Menu.Item>
            <Menu.Item key="2" className="page-sider">
              <Icon type="book" />
              <span>All Books</span>
            </Menu.Item>
            <Menu.Item key="3" className="page-sider">
              <Icon type="search" />
              <span>Advanced search</span>
            </Menu.Item>
            <SubMenu
              className="page-sider"
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User Profile</span>
                </span>
              }
            >
              <Menu.Item key="4" className="page-sider">
                Profile
              </Menu.Item>
              <Menu.Item key="5" className="page-sider">
                Cart
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9" onClick={this.showLoginModal}>
              <Icon type="login" />
              <span>Log in</span>
            </Menu.Item>
            <Menu.Item key="10">
              <Icon type="login" />
              <span>Registration</span>
            </Menu.Item>
            <Menu.Item key="11">
              <Icon type="logout" />
              <span>Log out</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="page-layout">
          <Content style={{ margin: '30px 16px' }}>
            <div className="page-content">sadsadsad</div>
            <Login isModalVisible = {this.state.isLoginModalVisible}/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SideMenu;
