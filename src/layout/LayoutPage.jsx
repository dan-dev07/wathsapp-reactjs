import React, { useState } from "react";
import { Divider, Layout } from "antd";
import { MenuLayout } from "./MenuLayout";
import Logo from "./Logo";
import { User } from "./User";
import { Logout } from "./Logout";
const { Content, Sider } = Layout;

//

export const LayoutPage = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  //
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
        style={{ backgroundColor: "#fff" }}
      >
        <Logo collapsed={collapsed} />
        <User />
        <Divider />
        <MenuLayout />
        <Divider />
        <Logout collapsed={collapsed} />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "10px 10px",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
