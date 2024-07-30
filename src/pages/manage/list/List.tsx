import React, { FC } from 'react'
import styles from './index.module.scss'
import ListSearch from '../../../components/ListSearch'
import { getQuestionList } from '../../../services/api'
import { useRequest } from 'ahooks'
import { Spin } from 'antd'
import Question from '../../../layout/Question.tsx'

const QuestionList: FC = () => {
  const id = '123'
  async function mapGetQuestionList() {
    return await getQuestionList(id)
  }
  const { loading, data: questionAllList } = useRequest<Question[], any>(mapGetQuestionList)
  return (
    <>
      <div className={styles.index}>
        <ListSearch></ListSearch>
      </div>
      {loading && <Spin></Spin>}
      {!loading &&
        questionAllList.length > 0 &&
        questionAllList.map(item => {
          return <div key={item._id}>{item.title}</div>
        })}
    </>
  )
}

export default QuestionList
