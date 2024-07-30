import React, { FC } from 'react'
import styles from './index.module.scss'
import { useSearchParams } from 'react-router-dom'
const Edit: FC = () => {
  const [searchParams] = useSearchParams()
  console.log(searchParams.get('id'))
  return (
    <>
      <div className={styles.index}>1</div>
    </>
  )
}

export default Edit
