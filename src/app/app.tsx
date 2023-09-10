import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoadingSpinner } from '../shared/ui/loading-spinner';
import { AppRouter } from './provider/router';
import { Oops } from '../widgets/oops';


export default function App(): JSX.Element {
  return (
    <ErrorBoundary fallback={<Oops type='error-boundary' />}>
      <Suspense fallback={<LoadingSpinner spinnerType='page' />}>
        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
        <RouterProvider router={AppRouter} />
      </Suspense>
    </ErrorBoundary>
  );
}
