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
    '@media (max-width: 640px)': {
      fontSize: '18px',
    },
  },

  large: {
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '34px',
    '@media (max-width: 640px)': {
      fontSize: '18px',
    },
  },
};

export const textStyle = {
  small: {
    fontSize: '16px',
    '@media (max-width: 640px)': {
      fontSize: '14px',
    },
  },

  large: {
    fontSize: '20px',
    '@media (max-width: 640px)': {
      fontSize: '14px',
    },
  },
};

export const paymentStyle = {
  small: {
    fontWeight: 600,
    '@media (max-width: 640px)': {
      fontSize: '16px',
    },
  },

  large: {
    fontWeight: 700,
    fontSize: '20px',
    '@media (max-width: 640px)': {
      fontSize: '16px',
    },
  },
};

export const dotStyle = {
  fontSize: '20px',
  lineHeight: '21px',
  color: theme.colors.grayscale[6],
  '@media (max-width: 640px)': {
    display: 'none',
  },
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

export const paymentContainerStyle = {
  '@media (max-width: 640px)': {
    flexDirection: 'column' as const,
    alignItems: 'start',
  },
};
