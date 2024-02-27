import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(()=>{
    //declare variable for items
    const localValue = localStorage.getItem('ITEMS')
    //if nothing in items, return empty arr
    if(localValue == null) return []
    //otherwise return item object
    return JSON.parse(localValue)
  });

  //every time todos changes, store todos in local storage
  useEffect(()=>{
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed){
    //currentTodos is just current state of todos
    setTodos(currentTodos =>{
      return currentTodos.map(todo=>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}
