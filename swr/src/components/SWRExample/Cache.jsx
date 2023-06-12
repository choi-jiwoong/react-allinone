import React from 'react'
import { SWRConfig, useSWRConfig } from 'swr'
import { Avatar } from './Profile'

function localStorageProvider() {
  // 초기화할 때, `localStorage`의 데이터를 map으로 복구합니다.
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))

  // app을 unloading하기 전에, 모든 데이터를 `localStorage`에 다시 씁니다.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })

  // 성능을 위해 여전히 map을 사용해 쓰고 읽습니다.
  return map
}

export default function Cache() {
  return (
    <div>
      <SWRConfig value={{ provider: localStorageProvider }}>
        <Page />
      </SWRConfig>
    </div >
  )
}

const Page = () => {

  const { cache } = useSWRConfig();

  // mutate

  return (
    <div>
      <Avatar id="123AB" />
      <button onClick={() => {
        // mutate("/api/users/123AC");
        console.log(`clicked : ${JSON.stringify(cache.get("/api/users/123AC"))}`)
      }}>Click me</button>
    </div>
  )
}
