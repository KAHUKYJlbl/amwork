import { useEffect, useState } from 'react';
import axios from 'axios';

import { Todo, TodoType } from '../../../entities/todo'
import { Button } from '../../../shared/ui/button';

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
        <div className={classes.date}>Today</div>

        <div className={classes.buttons}>
          <Button type='plus' />
          <Button type='count' data={String(todos.length)} />
        </div>
      </div>

      <ul className={classes.list}>
        { todos.map((todo) => <Todo todo={todo} key={todo.id} />) }
      </ul>
    </section>
  )
}
