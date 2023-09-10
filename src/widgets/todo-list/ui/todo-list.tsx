import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import { Todo, TodoType } from '../../../entities/todo'
import { Button } from '../../../shared/ui/button';

import classes from './todo-list.module.sass';
import { useVisible } from '../lib/hooks/use-visible';

const BACKEND_URL = 'https://jsonplaceholder.typicode.com/todos';
const REQUEST_TIMEOUT = 5000;
const TODOS_PER_PAGE = 10;

export const TodoList = (): JSX.Element => {
  const todoRef = useRef<HTMLLIElement>(null);
  const [todos, setTodos] = useState<TodoType[]>( [] );
  const [currentPage, setCurrentPage] = useState(1);
  const isFetching = useVisible(todoRef);

  useEffect(() => {
    if (isFetching) {
      axios.get<TodoType[]>(
        `?_page=${currentPage}&_limit=${TODOS_PER_PAGE}`,
        {
          baseURL: BACKEND_URL,
          timeout: REQUEST_TIMEOUT,
        }
      ).then(( {data} ) => {
        setTodos((todos) => [
          ...todos,
          ...data.filter((todo) =>
            !todos.some((listTodo) => listTodo.id === todo.id)
          )
        ]);
        setCurrentPage((current) => current + 1);
      });
    }
  }, [isFetching]);

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
        {
          todos.map((todo, index) =>
            <Todo
              todo={todo}
              key={todo.id}
              ref={index === TODOS_PER_PAGE * (currentPage - 1) - 1 ? todoRef : undefined} />
          )
        }
      </ul>
    </section>
  )
}
