import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { MainPage } from '../../../../pages/main-page';
import { NotFound } from '../../../../pages/not-found';
import { TodoPage } from '../../../../pages/todo-page';

import { AppRoute } from '../lib/routes';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path={AppRoute.Main}
        element={
          <MainPage />
        }
      />
      <Route
        path={AppRoute.Todo}
        element={
          <TodoPage />
        }
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </>
  )
);
