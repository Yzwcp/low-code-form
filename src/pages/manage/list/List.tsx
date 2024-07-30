import React, { FC } from 'react'
import styles from './index.module.scss'
import ListSearch from '../../../components/ListSearch'
const star: FC = () => {
  return (
    <>
      <div className={styles.index}>
        <ListSearch></ListSearch>
      </div>
    </>
  )
}

export default star
