import { createStyles } from '@mantine/core';

export const textStyle = {
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '29px',
  marginTop: '32px',
};

export const useStales = createStyles((theme) => ({
  link: {
    background: theme.colors.blue[1],
    borderRadius: '8px',
    minWidth: '164px',
    height: '42px',
    color: theme.colors.blue[6],
    fontWeight: 600,
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '32px',
    '&:hover': {
      backgroundColor: theme.colors.blue[2],
    },
  },
}));
