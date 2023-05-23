import { MouseEvent } from 'react';
import { PagesPaths } from 'components/routes';
import { NavLink, useLocation } from 'react-router-dom';
import { Box, List } from '@mantine/core';
import { listStyle, useStyles } from './styles';

export const NavList = () => {
  const pagesPaths = [PagesPaths.jobSearch, PagesPaths.favorites];

  const location = useLocation();

  const { classes } = useStyles();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path === location.pathname) event.preventDefault();
  };

  return (
    <Box component="nav" sx={{ width: '100%' }}>
      <List sx={listStyle}>
        {pagesPaths.map((path, index) => (
          <List.Item key={index}>
            <NavLink
              onClick={(event) => handleClick(event, path.path)}
              className={({ isActive }) => (isActive ? classes.active : classes.default)}
              to={path.path}
            >
              {path.title}
            </NavLink>
          </List.Item>
        ))}
      </List>
    </Box>
  );
};
