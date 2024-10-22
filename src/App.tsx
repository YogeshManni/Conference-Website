import React, { useEffect, useState } from "react";
import {
  AppstoreAddOutlined,
  CaretRightOutlined,
  DesktopOutlined,
  FacebookOutlined,
  FileOutlined,
  InstagramOutlined,
  LogoutOutlined,
  PieChartOutlined,
  TeamOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Button, Col, Layout, Menu, Row, theme } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
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
import Register from "./Components/Register/Register";

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

  useEffect(() => {
    AOS.init({
      duration: 1000, // Global animation duration
      once: true, // Only once animation
    });
  }, []);

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
              className=""
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
                <Route path="/register/*" element={<Register />}></Route>
              </Routes>
            </div>
          </Content>
          <Footer
            data-aos="fade-up"
            className={`${
              !collapsed ? "ml-[200px]" : "ml-[0px]"
            } pt-[100px] w-full  bg-cover bg-center py-20 pr-20`}
            style={{
              backgroundImage: `url(${require("./assets/img/bgrd.jpg")})`,
            }}
          >
            <Row gutter={[32, 32]}>
              <Col span={8}>
                <h2 className="text-headingColor text-[40px] font-bold mb-7 font-arizonia ">
                  {" "}
                  About us{" "}
                </h2>
                <p className="text-gray-500 text-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta nisi quod hic neque maxime cupiditate itaque, illo
                  excepturi praesentium veniam cum accusamus amet voluptatibus
                  laudantium harum numquam minus ipsum repudiandae adipisci.
                  Odio velit molestias quibusdam quod esse quaerat at
                  dignissimos deserunt odit, quos dolores, aperiam aut!
                  Delectus, a sequi. Veritatis?
                </p>
              </Col>

              <Col span={8}>
                <h2 className="text-headingColor text-[40px] font-bold mb-7 font-arizonia ">
                  {" "}
                  Links{" "}
                </h2>

                <ul className="text-[20px] text-gray-500 cursor-pointer leading-[2]">
                  <li>
                    <CaretRightOutlined />
                    Presenters
                  </li>
                  <li>
                    <CaretRightOutlined />
                    About
                  </li>
                  <li>
                    <CaretRightOutlined />
                    Programs
                  </li>
                  <li>
                    <CaretRightOutlined />
                    Conferences
                  </li>
                </ul>
              </Col>
              <Col span={8} className="lg:ml-[-100px]">
                <h2 className="text-headingColor text-[40px] font-bold mb-7 font-arizonia ">
                  {" "}
                  Connect with us{" "}
                </h2>

                <ul className="text-[20px] text-gray-500 cursor-pointer line leading-[2]">
                  <li>
                    <FacebookOutlined />
                    &nbsp; Facebook
                  </li>
                  <li>
                    <InstagramOutlined />
                    &nbsp; Instagram
                  </li>
                  <li>
                    <TwitterOutlined />
                    &nbsp; Twitter
                  </li>
                </ul>
              </Col>
            </Row>

            {/* Comox Valley Conference ©{new Date().getFullYear()} */}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
