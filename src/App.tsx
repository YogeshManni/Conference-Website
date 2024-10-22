import React, { useState } from "react";
import { Layout, theme } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SiderComponent from "./Components/SiderComponent";
import LogoComponent from "./Components/LogoComponent";
import FooterComponent from "./Components/FooterComponent";

import Event from "./Components/Event/Event";
import Presenters from "./Components/Presenters/Presenters";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";

import "./App.css";

const { Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }} hasSider={true}>
      <SiderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Content className={`${!collapsed ? "ml-[200px]" : "ml-[0px]"}`}>
          <div style={{ minHeight: 360, background: colorBgContainer }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/event" element={<Event />} />
              <Route path="/presenters" element={<Presenters />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Content>
        <FooterComponent collapsed={collapsed} />
      </Layout>
    </Layout>
  );
};

export default App;
