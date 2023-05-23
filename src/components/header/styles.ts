import { createStyles } from '@mantine/core';

export const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '0 162px',
  height: '84px',
  '@media (max-width: 920px)': {
    padding: '0 10px',
  },
};

export const titleStyle = {
  fontWeight: 600,
  fontSize: '24px',
  lineHeight: '36px',
  '@media (max-width: 640px)': { display: 'none' },
};

export const useStyles = createStyles(() => ({
  titleLink: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
}));
