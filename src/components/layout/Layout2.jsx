import React, { useState } from 'react';
import {
  DesktopOutlined,
  ProfileOutlined,
  UserOutlined,
  // ScheduleOutlined,  
} from '@ant-design/icons';
import {  Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
// import { adminPortalService } from '../../lib/admin-service';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const Layout2 = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const onClickMenu = (path) => {
    navigate(path);
  }

  const items = [
    getItem(<span onClick={() => onClickMenu('/teacher-portal/option1')}>Option 1</span>, '1', <ProfileOutlined  />),
    getItem(<span onClick={() => onClickMenu('/teacher-portal/option2')}>Option 2</span>, '2', <UserOutlined />),
    getItem(<span onClick={() => onClickMenu('/teacher-portal/option3')}>Option 3</span>, '3', <DesktopOutlined />),
    getItem(<span onClick={() => onClickMenu('/teacher-portal/option4')}>Option 4</span>, '4', <DesktopOutlined />),
    
    // getItem(<span onClick={() => onClickMenu('/teacher-portal/option5')}>Option 5</span>, '5', <ScheduleOutlined />),
    
  ];

  const logout = () => {
    localStorage.removeItem('users');
    // setIsLoggedin(false);
    navigate("/");
};

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
      
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        
        >
          <div>
            <button style={{display: "block", marginLeft: "auto"}} onClick={logout}>LogOut</button>
          </div>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          
          {children}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Layout2;