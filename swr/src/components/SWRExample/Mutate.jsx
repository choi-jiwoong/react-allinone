import React from 'react'
import useSWR, { SWRConfig, useSWRConfig } from 'swr'
import axios from 'axios'

export default function Mutate() {
  return (
    <SWRConfig>
      <Page />
    </SWRConfig>
  )
}

const fetcher = (url) => axios.get(url).then(res => res.data);

const Page = () => {
  const { data } = useSWR('/api/users/aaaa2', fetcher)
  const { mutate } = useSWRConfig()

  if (!data) {
    return <div>loading...</div>
  }

  return (
    <div>
      <h1>My name is {data.name}.</h1>
      <button onClick={async () => {
        const newName = data.name.toUpperCase();
        // API에 대한 요청을 종료하여 데이터를 업데이트 합니다.
        // await requestUpdateUsername(newName)
        // 로컬 데이터를 즉시 업데이트 하고 다시 유효성 검사(refetch)를 합니다.
        // NOTE: key는 미리 바인딩되어 있으므로 useSWR의 mutate를 사용할 때 필요하지 않습니다.
        mutate({ ...data, name: newName }, false);
        mutate();
      }}>Uppercase my name!</button>
    </div>
  )
}
