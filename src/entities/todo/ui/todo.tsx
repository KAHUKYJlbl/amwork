import { faker } from '@faker-js/faker';

import getDate from '../lib/get-date';
import { TodoType } from '../lib/types';
import classes from './todo.module.sass';

type TodoProps = {
  todo: TodoType,
};

export const Todo = ({todo}: TodoProps): JSX.Element => {
  return (
    <li className={classes.wrapper}>
      <div className={classes.card}>
        <div className={classes.header}>
          {todo.title}
        </div>

        { false && <div className={classes.time}></div> }

        <div className={classes.date}>
          <div>{getDate()}</div>
          <div>{getDate()}</div>
        </div>

        <div className={classes.description}>
          {faker.lorem.sentence()}
        </div>

        <div className={classes.footer}>
          
        </div>
      </div>
    </li>
  )
};
