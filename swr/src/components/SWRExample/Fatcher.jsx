import React from 'react'
import { SWRConfig } from 'swr'
import useSWR from 'swr'
import axios from 'axios'

export default function Fatcher() {
  return (
    <SWRConfig
      value={{
        fetcher: (...args) => axios.get(...args).then(res => res.data)

      }}
    >
      <div>SWR Fatcher</div>
      <Page />
    </SWRConfig>
  )
}

const Page = () => {

  const { data, error } = useSWR('/api/users404/123',
    {
      ErrorRetry: (
        error, key, config, revalidate, { retryCount }
      ) => {
        if (error.status === 404) {
          return;
        }

        if (retryCount > 3) {
          return;
        }

        setTimeout(() => revalidate({ retryCount }), 100);
      }
    }


  )

  if (error) {
    return <div>failed to load</div>
  }

  if (!data) {
    return <div>loading...</div>
  }

  return <div>hello {data.name}!</div>
}
