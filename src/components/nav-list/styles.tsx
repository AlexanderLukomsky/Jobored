import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  default: {
    color: theme.colors.grayscale[7],
  },
  active: {
    color: theme.colors.blue[5],
    fontWeight: 500,
  },
}));

export const listStyle = {
  display: 'flex',
  flexDirection: 'row' as const,
  gap: '60px',
  maxWidth: '275px',
  width: '100%',
  margin: '0 auto',

  '@media (max-width: 640px)': {
    gap: '15px',
    alignItems: 'flex-end',
    justifyContent: 'end',
  },
};
