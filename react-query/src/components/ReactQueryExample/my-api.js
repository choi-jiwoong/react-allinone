import axios from 'axios'

export const getTodos = () =>
  axios.get('/api/todos').then(res => res.data)
export const postTodo = (todo) =>
  axios.post('/api/todos', todo).then(res => res.data)

export const updateTodo = (todo) => axios.put(`/api/todos/${todo.id}`, todo)

export const deleteTodo = (id) => axios.delete(`/api/todos/${id}`)
