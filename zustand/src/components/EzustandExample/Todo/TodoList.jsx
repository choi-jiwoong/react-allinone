import React, { useEffect } from 'react'
import { useStore } from './TodoStore';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

export default function TodoList() {
  const todoList = useStore(state => state.filteredTodoListState());

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