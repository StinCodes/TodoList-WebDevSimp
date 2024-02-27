import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/*         conditional statement, if nothing in todos array then print "No todos" */}
      {todos.length === 0 && "Nothing to do!"}
      {todos.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
