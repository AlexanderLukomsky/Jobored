import { createBrowserRouter } from 'react-router-dom';
import { JobSearch, jobsLoader } from 'pages/job-search';
import { NotFound } from 'pages/404';
import { Favorites } from 'pages/favorites';
import { Vacancy } from 'pages/vacancy';
import { Root } from 'pages/root';
import { PagesPaths } from './constants';

export const router = createBrowserRouter([
  {
    path: PagesPaths.jobSearch.path,
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          { index: true, element: <JobSearch />, loader: jobsLoader },
          { path: PagesPaths.favorites.path, element: <Favorites /> },
          { path: `${PagesPaths.vacancy.path}/:id`, element: <Vacancy /> },
        ],
      },
    ],
  },
]);
