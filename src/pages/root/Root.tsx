import { Flex } from '@mantine/core';
import { Header } from 'components/header';
import { Outlet } from 'react-router-dom';
import { layoutStyle } from './styles';

export const Root = () => (
  <Flex sx={{ minHeight: '100vh' }} bg="grayscale.4" direction="column">
    <Header />

    <Flex sx={layoutStyle}>
      <Outlet />
    </Flex>
  </Flex>
);
