import { NavList } from 'components/nav-list';
import { Box, Image, Title } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { PagesPaths } from 'components/routes';
import Logo from 'common/assets/icons/logo.svg';
import { headerStyle, titleStyle, useStyles } from './styles';

export const Header = () => {
  const { classes } = useStyles();

  return (
    <Box component="header" sx={headerStyle} bg="grayscale.0">
      <NavLink className={classes.titleLink} to={PagesPaths.jobSearch.path}>
        <Image width={30} src={Logo} alt="Jobored logo" />

        <Title order={1} sx={titleStyle}>
          Jobored
        </Title>
      </NavLink>

      <NavList />
    </Box>
  );
};
