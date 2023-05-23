import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { getTheme } from 'common/theme';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from 'components/routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const theme: any = getTheme();

root.render(
  <MantineProvider theme={theme} withGlobalStyles>
    <RouterProvider router={router} />
  </MantineProvider>,
);
