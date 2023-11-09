import React, { useState } from "react";
import Popover1 from "./Popover";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import Teacher from "../Teacher/Teacher";
import Student from "../Student/Student";
import Classroom from "../Classroom/Classroom";
import { Layout, Menu, theme } from "antd";
import { useEffect } from "react";
import { PortalService } from "../../lib/service/admin-service";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Teacher", "1", <UserOutlined />),
  getItem("Student", "2", <UserOutlined />),
  getItem("Class", "3", <TeamOutlined />),
];
const LayoutPortal = ({}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Teacher");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  let userFromLocalStorage = JSON.parse(localStorage.getItem("users"));
  const [user, setUser] = useState({});
  useEffect(() => {
    if (userFromLocalStorage) {
      PortalService.getUser(userFromLocalStorage?.id).then((res) => {
        console.log(res.data);
        setUser(res?.data);
      });
    }
  }, []);
  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item.key);
  };
  if (user?.role === "STUDENT") {
    return (
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical"></div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            selectedKeys={[selectedMenuItem]}
            onClick={handleMenuItemClick}
          >
            {items.map((item) => (
              <Menu.Item key={item.label} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Popover1 />
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <div>
              {selectedMenuItem === "Student" && <Student />}
              {/* Render Student component */}
              {selectedMenuItem === "Class" && <Classroom />}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Layout>
    );
  }
  if (user?.role === "ADMIN") {
    return (
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical"></div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            selectedKeys={[selectedMenuItem]} // Set the selected keys based on state
            onClick={handleMenuItemClick}
          >
            {items.map((item) => (
              <Menu.Item key={item.label} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Popover1 />
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <div>
              {selectedMenuItem === "Teacher" && <Teacher />}
              {/* Render Teacher component */}
              {selectedMenuItem === "Student" && <Student />}
              {/* Render Student component */}
              {selectedMenuItem === "Class" && <Classroom />}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Layout>
    );
  }
};
export default LayoutPortal;
