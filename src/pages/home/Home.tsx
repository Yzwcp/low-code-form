import React, { FC } from 'react'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

const Home: FC = () => {
  const nav = useNavigate()
  function go() {
    nav({
      pathname: '/login',
    })
  }
  return (
    <>
      <div className={styles.index} onClick={go}>
        Home
      </div>
    </>
  )
}

export default Home
