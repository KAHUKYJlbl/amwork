import { useEffect, useState } from 'react';
import axios from 'axios';

import { Todo, TodoType } from '../../../entities/todo'

import classes from './todo-list.module.sass';

const BACKEND_URL = 'https://jsonplaceholder.typicode.com/todos';
const REQUEST_TIMEOUT = 5000;

export const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoType[]>( [] );

  useEffect(() => {
    axios.get<TodoType[]>(
      `?_page=5`,
      {
        baseURL: BACKEND_URL,
        timeout: REQUEST_TIMEOUT,
      }
    ).then(( {data} ) => setTodos(data));
  }, []);

  return (
    <section className={classes.wrapper}>
      <div className={classes.header}>

      </div>

      <ul className={classes.list}>
        { todos.map((todo) => <Todo todo={todo} key={todo.id} />) }
      </ul>
    </section>
  )
}
