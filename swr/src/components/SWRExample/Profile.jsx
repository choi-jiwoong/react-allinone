import React from 'react'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = (...args) => axios.get(...args).then(res => res.data)


function useUser(id) {
  const { data, error } = useSWR(`/api/users/${id}`, fetcher, {
    refreshInterval: 100000
  })

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default function Page() {

  const id = '123AC';

  return (
    <div>
      <Profile id={id} />
      <Avatar id={id} />
    </div>
  );
}


function Profile({ id }) {
  const { user, isLoading, isError } = useUser(id)

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <div>hello {user.name}!</div>
      <Avatar id={id} />
    </>
  )
}


export function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id)

  if (isError) return <div>failed to load (Avatar)</div>
  if (isLoading) return <div>loading... (Avatar)</div>

  return <div>hello {user.name}! (Avatar)</div>
}