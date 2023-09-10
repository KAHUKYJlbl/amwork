import { useRef } from 'react';
import { faker } from '@faker-js/faker';

import { Hashtag, HashtagExtra } from '../../../shared/ui/hashtag';

import HashtagList from '../model/hashtag-list/hashtag-list';
import { MAX_HASHTAGS } from '../lib/const';
import getDate from '../lib/get-date';
import { TodoType } from '../lib/types';
import classes from './todo.module.sass';
import { Checkbox } from '../../../shared/ui/checkbox';

type TodoProps = {
  todo: TodoType,
};

export const Todo = ({todo}: TodoProps): JSX.Element => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  return (
    <li className={classes.wrapper}>
      <div className={classes.card}>
        <div className={classes.header}>
          <span>
            <Checkbox ref={checkboxRef} state={todo.completed} />{todo.title}
          </span>
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
          <div className={classes.hashtagList}>
            {
              HashtagList
                .slice(0, MAX_HASHTAGS)
                .map((hashtag) => <Hashtag key={hashtag.text} text={hashtag.text} type={hashtag.type} />)
            }

            <HashtagExtra count={HashtagList.length - MAX_HASHTAGS} />
          </div>

          <div className={classes.avatar}>
            <img height={24} width={24} src="/img/avatar.png" alt="User avatar" />
          </div>
        </div>
      </div>
    </li>
  )
};
