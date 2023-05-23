import { useEffect, useState } from 'react';
import { Flex } from '@mantine/core';
import { Header } from 'components/header';
import { Outlet } from 'react-router-dom';
import { api } from 'services';
import { Loader } from 'components/loader';
import { layoutStyle } from './styles';

export const Root = () => {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const auth = async () => {
      await api.auth();
      setAuth(true);
    };

    auth();
  }, []);

  if (isAuth) {
    return (
      <Flex sx={{ minHeight: '100vh' }} bg="grayscale.4" direction="column">
        <Header />

        <Flex sx={layoutStyle}>
          <Outlet />
        </Flex>
      </Flex>
    );
  }

  return <Loader />;
};
