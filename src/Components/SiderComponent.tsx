//SiderComponent.tsx

import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { items, MenuKeys } from "./MenuItems";
import LogoComponent from "./LogoComponent";

const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  height: "100vh",
  position: "fixed",
  zIndex: 999,
};

const SiderComponent: React.FC<{ collapsed: boolean; setCollapsed: any }> = ({
  collapsed,
  setCollapsed,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const menuClick = (e: any) => {
    let data: any = items[e.key];
    navigate(data.route);
  };

  return (
    <Sider
      style={siderStyle}
      breakpoint="lg"
      collapsedWidth="0"
      collapsible
      onCollapse={(value) => setCollapsed(value)}
      collapsed={collapsed}
    >
      <LogoComponent />
      <Menu
        onClick={menuClick}
        theme="dark"
        selectedKeys={[MenuKeys[`/${location.pathname.split("/")[1]}`] || "0"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default SiderComponent;
