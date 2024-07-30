import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './Layout.module.scss'
const { Header, Content, Footer } = Layout
const Main: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>首页</Header>
      <Content className={styles.main}>
        <Outlet></Outlet>
      </Content>
      <Footer className={styles.footer}>问卷调查@2024 - present </Footer>
    </Layout>
  )
}

export default Main
