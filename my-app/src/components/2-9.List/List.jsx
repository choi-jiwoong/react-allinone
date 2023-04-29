import React from 'react'

export default function List() {
  
  const todos = [
    { id: 1, text: '리액트 공부하기', checked: true },
    { id: 2, text: '컴포넌트 스타일링 해보기', checked: true },
    { id: 3, text: '일정 관리 앱 만들어보기', checked: false },
  ];

  const Item = (props) => {
    return <li>
          {props.id}. {props.text}
          {props.checked ? <b>[V]</b> : <b>[ ]</b>}
        </li>
  }
  
  const todoList = todos.map((todo) => <Item key={todo.id} id={todo.id} text={todo.text} checked={todo.checked} />)

  return <>{todoList}</>;

}
