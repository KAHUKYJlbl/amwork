import { TodoList } from '../../../widgets/todo-list';

import classes from './todo-page.module.sass';

const TodoPage = (): JSX.Element => {
  return (
      <main className={classes.wrapper}>
        <section className={classes.content}>
          <div className={classes.element}>
            <span className={classes.elementContent}>Element 1</span>
          </div>

          <div className={classes.element}>
            <span className={classes.elementContent}>Element 2</span>
          </div>

          <div className={classes.element}>
            <span className={classes.elementContent}>Element 3</span>
          </div>

          <div className={classes.element}>
            <span className={classes.elementContent}>Element 4</span>
          </div>

          <div className={classes.element}>
            <span className={classes.elementContent}>Element 5</span>
          </div>

          <div className={classes.element}>
            <span className={classes.elementContent}>Element 6</span>
          </div>

          <div className={classes.element}>
            <span className={classes.elementContent}>Element 7</span>
          </div>

          <div className={classes.element}>
            <span className={classes.elementContent}>Element 8</span>
          </div>

          <div className={classes.element}>
            <span className={classes.elementContent}>Element 9</span>
          </div>

          <div className={classes.element}>
            <span className={classes.elementContent}>Element 10</span>
          </div>

          <div className={classes.element}>
            <span className={classes.elementContent}>Element 11</span>
          </div>

          <div className={classes.element}>
            <span className={classes.elementContent}>Element 12</span>
          </div>

        </section>

        <TodoList />
      </main>
  );
};

export default TodoPage;
