import React, { FC } from 'react'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Button } from 'antd'
const Home: FC = () => {
  const nav = useNavigate()
  useTitle('首页')
  function go() {
    nav({
      pathname: '/manage/list',
    })
  }
  return (
    <>
      <div className={styles.index}>
        <Button type={'primary'} size={'large'} onClick={go}>
          登录使用
        </Button>
      </div>
    </>
  )
}

export default Home
