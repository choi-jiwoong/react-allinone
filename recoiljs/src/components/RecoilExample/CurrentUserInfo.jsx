import React from 'react'
import { atom, selector, useRecoilState, useRecoilValue, useRecoilValueLoadable, selectorFamily } from 'recoil'
import axios from 'axios'
import { ErrorBoundary } from './ErrorBoundary';


// const currentUserIDState = atom({
//   key: 'CurrentUserID',
//   default: 2,
// });

// const tableOfUsers = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }]

// const currentUserNameState = selector({
//   key: 'CurrentUserName',
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

// const currentUserNameQuery = selector({
//   key: 'CurrentUserName',
//   get: async ({ get }) => {
//     const response = await axios.get(`/users/${get(currentUserIDState)}`);

//     if (response.error) {
//       console.log(response.error);
//     }

//     return response.data.name;
//   },
// });


const currentUserNameQuery = selectorFamily({
  key: 'CurrentUserName',
  get: (id) => async () => {
    const response = await axios.get(`/users/${id}`);
    if (response.error) {
      console.log(response.error);
    }
    return response.data.name;
  }
})


function CurrentUser() {
  const userName = useRecoilValueLoadable(currentUserNameQuery(2));

  if (userName.state === 'loading') {
    return <div>Loading...</div>;
  }
  if (userName.state === 'hasError') {
    return <div>Something wrong ...</div>;
  }

  return (
    <div>
      {userName.contents}
    </div>
  )
}

export default function CurrentUserInfo() {

  return (
    // <Error4Boundary>
    //   <React.Suspense fallback={<div>Loading...</div>}>
    <CurrentUser />
    //   </React.Suspense>
    // </ErrorBoundary>
  )
}

