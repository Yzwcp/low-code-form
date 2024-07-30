import React, { FC, useEffect } from 'react'
import styles from './Layout.module.scss'
import Home from '../pages/home/Home.tsx'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Button, Layout, Space } from 'antd'
const { Header, Content, Footer } = Layout
const Manage: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  // useEffect(() => {
  //   // 在组件挂载后立即导航到指定路由
  //   nav('/manage/list')
  // }, [nav])
  return (
    <Layout>
      <Header className={styles.header}>1</Header>
      <Content className={styles.main}>
        <div className={styles.container}>
          <div className={styles.left}>
            <Space direction={'vertical'}>
              <Button>新建问题</Button>
              <Button
                type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
                onClick={() => nav('/manage/list')}
              >
                我的问卷
              </Button>
              <Button
                type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
                onClick={() => nav('/manage/star')}
              >
                星标问卷
              </Button>
              <Button
                type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
                onClick={() => nav('/manage/trash')}
              >
                回收站
              </Button>
            </Space>
          </div>
          <div className={styles.right}>
            <Outlet></Outlet>
          </div>
        </div>
      </Content>
      <Footer className={styles.footer}>问卷调查@2024 - present </Footer>
    </Layout>
  )
}

export default Manage
