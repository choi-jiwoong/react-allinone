import React from 'react'
import { QueryClient, useQuery, useMutation } from 'react-query'
import { getTodos, postTodo } from './my-api'
import GlobalLoader from './GlobalLoader'

export default function QuickStart() {

  const queryClient = new QueryClient();
  const query = useQuery('todos', getTodos);

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    },
  });

  if (query.isLoading) {
    return <div>Loading...</div>
  }

  if (query.isError) {
    return <div>An error occurred: {query.error.message}</div>
  }

  return (
    <div>
      <GlobalLoader />
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            todo: {
              id: Date.now(),
              title: "title " + Date.now(),
              completed: false
            }
          })
        }}>
        Add Todo
      </button>

    </div >
  )
}
