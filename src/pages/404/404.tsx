import { Flex, Image, Text } from '@mantine/core';
import NotFoundImage from 'common/assets/icons/notfound.svg';
import { NavLink } from 'react-router-dom';
import { PagesPaths } from 'components/routes';
import { textStyle, useStales } from './styles';

export const NotFound = () => {
  const { classes } = useStales();

  return (
    <Flex direction="column" align="center" w="100%" sx={{ paddingTop: '76px' }}>
      <Image src={NotFoundImage} alt="not found" maw={240} />
      <Text sx={textStyle}>Упс, здесь еще ничего нет!</Text>
      <NavLink className={classes.link} to={PagesPaths.jobSearch.path}>
        Поиск Вакансий
      </NavLink>
    </Flex>
  );
};
