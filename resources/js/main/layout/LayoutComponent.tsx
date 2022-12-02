import React, { useState, Suspense } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import './layout.scss'
import { Layout, Menu } from 'antd'
import menu from './menu'
import { LoadingOutlined } from '@ant-design/icons'
import { Routes, Route } from 'react-router-dom'
import contentRoute from './content-route'

const { Header, Sider, Content } = Layout
const LayoutComponent: React.FC = () => {
  let href: string = document.location.hash.split('/')[1] || 'main'

  const [selectedKey, setSelectedKey] = useState(href)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          items={menu}
          defaultSelectedKeys={[selectedKey]}
          selectedKeys={[selectedKey]}
          onClick={(e) => {
            setSelectedKey(e.key)
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 500,
          }}
        >
          <Suspense
            fallback={
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <LoadingOutlined style={{ fontSize: '3rem' }} />
              </div>
            }
          >
            <Routes>
              {contentRoute.map((content) =>
                content.element ? (
                  <Route
                    path={content.path}
                    element={<content.element />}
                    key={content.id}
                    index={content.index}
                  />
                ) : null
              )}
            </Routes>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
