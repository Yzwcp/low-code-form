import { FC, useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { Input } from 'antd'
import { useNavigate, useSearchParams } from 'react-router-dom'
const { Search } = Input
import { URL_PARAMS_SEARCH_KEY } from '../constant'
const ListSearch: FC = () => {
  const [value, setValue] = useState('')
  const nav = useNavigate()
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const searchKey = searchParams.get(URL_PARAMS_SEARCH_KEY)
    setValue(searchKey || '')
  }, [searchParams])
  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const onSearch = (value: string) => {
    nav({
      pathname: '/manage/list',
      search: `${URL_PARAMS_SEARCH_KEY}=${value}`,
    })
  }
  return (
    <Search
      placeholder="请输入搜索关键字"
      onChange={onHandleChange}
      value={value}
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  )
}

export default ListSearch
