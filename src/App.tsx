import React, { useEffect, useState } from "react";
import {
  AppstoreAddOutlined,
  DesktopOutlined,
  FileOutlined,
  LogoutOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import logo from "./assets/img/logo.png";

import "./App.css";
import Event from "./Components/Event/Event";
import Presenters from "./Components/Presenters/Presenters";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  route?: any,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    route,
    children,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "0", <PieChartOutlined />, "/"),
  getItem("Events Hub", "1", <PieChartOutlined />, "/event"),
  getItem("Presenters", "2", <DesktopOutlined />, "/presenters"),
  getItem("About", "3", <FileOutlined />, "/about"),
];

// create a hashmap to get index of routes
const MenuKeys: any = {
  "/home": "0",
  "/event": "1",
  "/presenters": "2",
  "/about": "3",
};

// Sider properties
const siderStyle: React.CSSProperties = {
  height: "100vh",
  position: "fixed",
  zIndex: 999,
};

export const LogoComponent = () => {
  return (
    <div className=" h-[auto] auto m-5 flex items-center justify-center">
      <img src={logo} className="h-[100px] w-auto" alt="logo"></img>
    </div>
  );
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [location, setLocation] = useState<string>("/");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuClick: MenuProps["onClick"] = (e: any) => {
    //
    let data: any = items[e.key];

    navigate(data.route);
  };

  //get current route
  console.log(useLocation().pathname, location);
  const currLoc = useLocation().pathname;
  if (location !== currLoc) {
    setLocation(currLoc);
  }

  return (
    <>
      <Layout style={{ minHeight: "100vh" }} hasSider={true}>
        <Sider
          style={siderStyle}
          breakpoint="lg"
          collapsedWidth="0"
          collapsible
          /*   style={{ position: "fixed" }} */
          onBreakpoint={(broken) => {
            //console.log(broken);
          }}
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <LogoComponent />
          <Menu
            onClick={menuClick}
            theme="dark"
            selectedKeys={[MenuKeys[location] || "0"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Content className={`${!collapsed ? "ml-[200px]" : "ml-[0px]"}`}>
            <div
              className="p-5 mx-5"
              style={{
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/event" element={<Event />}></Route>
                <Route path="/presenters" element={<Presenters />}></Route>
                <Route path="/about" element={<About />}></Route>
              </Routes>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Comox Valley Conference ©{new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
