import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LeftSquareOutlined,
  UserOutlined,
  WindowsOutlined,
  CrownOutlined,
  LoginOutlined,
  LogoutOutlined,
  HomeFilled,
  AlignCenterOutlined ,
  PlusSquareOutlined,
  PlusCircleOutlined 
  
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import AppFooter from "../Footer";
const { Header, Sider, Content } = Layout;

const RootLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { data: session } = useSession();
  const categories = [
    {
      category: "CPU",
      link: "/pc/CPU",
    },
    {
      category: "RAM",
      link: "/pc/RAM",
    },
    {
      category: "Motherboard",
      link: "/pc/Motherboard",
    },
    {
      category: "Power Supply",
      link: "/pc/PowerSupplyUnit",
    },
    {
      category: "Storage",
      link: "/pc/StorageDevice",
    },
    {
      category: "Monitor",
      link: "/pc/Monitor",
    },
  ];

  return (
    <Layout>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div
            className={`demo-logo-vertical text-white font-bold ${
              collapsed ? "px-1" : "text-[2em] px-2"
            }`}
          >
            PC Builder
          </div>
          <Menu theme="light" mode="inline">
            <Menu.Item icon={<HomeFilled />}>
              <Link href="/">Home </Link>
            </Menu.Item>

            {session?.user ? (
              <>
                <Menu.Item icon={<LogoutOutlined />}>
                  <Link href="/" onClick={() => signOut()}>
                    Logout{" "}
                  </Link>
                </Menu.Item>
                <Menu.Item icon={<PlusSquareOutlined />}>
                  <Link href="/pc">PC Builder. </Link>
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item icon={<PlusCircleOutlined />}>
                  <Link href="/signup">Signup</Link>
                </Menu.Item>
                <Menu.Item icon={<LoginOutlined />}>
                  <Link href="/login">Login.</Link>
                </Menu.Item>
              </>
            )}

            <Menu.SubMenu
              key="sub1"
              icon={<AlignCenterOutlined />}
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              title="Categories"
            >
              {categories?.map((category, i) => (
                <Menu.Item key={i}>
                  <Link href={`/pc/${category.category}`}>
                    {category.category}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          </Menu>
        </Sider>
        
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "17px",
                width: 90,
                height: 90,
              }}
            />
             <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={[{key:1,label:"Home"}]}
        />

          </Header>
          <Content
            style={{
              minHeight: 280,
              background: colorBgContainer,
              fontFamily: "cursive",
            }}
          >
            {children}
          </Content>
          <AppFooter></AppFooter>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default RootLayout;
