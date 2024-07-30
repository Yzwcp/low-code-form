import axios from '../request.ts'

export type Question = {
  _id: string
}
export async function getQuestionList(id: string): Promise<Question[]> {
  return (await axios.get('/que/list/' + id)) as Question[]
}
