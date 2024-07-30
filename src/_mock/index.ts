import Mock from 'mockjs'

Mock.mock('/api/getList', 'get', () => {
  return {
    err: 0,
    data: [
      { id: 1, title: '标题1' },
      { id: 2, title: '标题2' },
    ],
  }
})
