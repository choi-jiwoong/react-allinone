import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
// import { todoListState } from './TodoStore';
import { filteredTodoListState } from './TodoStore';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  useEffect(() => {
    console.log(`todoList: ${JSON.stringify(todoList)}`);
  }, [todoList])

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) =>
      (
        <TodoItem key={todoItem.id} item={todoItem} />
      )
      )}
    </>
  );
}