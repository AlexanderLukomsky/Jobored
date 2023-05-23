import { createStyles } from '@mantine/core';
import { getTheme } from 'common/theme';

const theme = getTheme();

export const containerStyle = {
  default: {
    position: 'relative' as const,
    border: '1px solid',
    borderColor: theme.colors.grayscale[2],
    padding: '24px 64px 24px 24px',
    borderRadius: '12px',
  },

  small: { gap: '12px' },

  large: { gap: '16px' },
};

export const titleStyle = {
  small: {
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '24px',
    color: theme.colors.blue[5],
  },

  large: {
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '34px',
  },
};

export const paymentStyle = {
  small: {
    fontWeight: 600,
  },

  large: {
    fontWeight: 700,
    fontSize: '20px',
  },
};

export const dotStyle = {
  fontSize: '20px',
  lineHeight: '21px',
  color: theme.colors.grayscale[6],
};

export const favoriteIconStyle = {
  position: 'absolute' as const,
  right: 24,
  top: 24,
};

export const useStales = createStyles((theme) => ({
  selected: {
    fill: theme.colors.blue[5],
    path: {
      stroke: theme.colors.blue[5],
    },
  },
}));
