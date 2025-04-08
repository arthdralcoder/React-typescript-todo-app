import React from 'react';
import Todo from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (id: number) => {
    const newTodo = prompt('Edit the task:', todo.todo);
    if (newTodo) {
      setTodos(
        todos.map((t) => (t.id === id ? { ...t, todo: newTodo } : t))
      );
    }
  };

  return (
    <form className="todos_single">
      {todo.isDone ? (
        <s className="todos_single--text">{todo.todo}</s>
      ) : (
        <span className="todos_single--text">{todo.todo}</span>
      )}
      <div>
        <span className="icon" onClick={() => handleEdit(todo.id)}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
