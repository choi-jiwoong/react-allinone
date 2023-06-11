import React, { useEffect } from 'react'
import axios from 'axios'
import create from 'zustand'


const useStore = create(set => ({
  userName: '',
  fatchUserName: async (id) => {
    const response = await axios.get(`/users/${id}`);
    set({ userName: response.data.name });
  },
}));



function CurrentUser() {
  const userName = useStore(state => state.userName);

  return (
    <div>
      {userName}
    </div>
  )
}

export default function CurrentUserInfo() {

  const fatchUserName = useStore(state => state.fatchUserName);

  return (
    <>
      <CurrentUser />
      <input onChange={(e) => fatchUserName(e.target.value)} />
    </>
  )
}

