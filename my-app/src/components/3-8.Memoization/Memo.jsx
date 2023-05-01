import React, { useEffect, useState } from 'react'
import Comments from './Comments'

const commentList = [
  { id: 1, title: "Nate", content: "Hello React! This is a sample comment.", likes: 1 },
  { id: 2, title: "Kevin", content: "Hello Redux! This is a sample comment.", likes: 2 },
  { id: 3, title: "Bood", content: "Hello Rekit! This is a sample comment.", likes: 3 },
  { id: 4, title: "Alice", content: "Hello Rekit Router! This is a sample comment.", likes: 1 },
  { id: 5, title: "Emily", content: "Hello Rekit Studio! This is a sample comment.", likes: 2 },
  { id: 6, title: "Bruce", content: "Hello Rekit Thunk! This is a sample comment.", likes: 4 },
  { id: 7, title: "Jack", content: "Hello Rekit Core! This is a sample comment.", likes: 6 },
]

export default function Memo() {

  const [comments, setComments] = useState(commentList);

  useEffect(() => {
    const interval = setInterval(() => {
      //const newComments = [...comments];
      //newComments[0].likes++;

      setComments((preComments) => [
        ...preComments,
        { id: preComments.length + 1, title: "Nate", content: "Hello React! This is a sample comment.", likes: 2 }

      ]);

    }, 1000);

    return () =>
      clearInterval(interval);
  }, []);

  return <Comments commentList={comments}></Comments>
}
