import { getTheme } from 'common/theme';

const theme = getTheme();

export const containerStyle = {
  maxWidth: '315px',
  width: '100%',
};

export const filterContainerStyle = {
  padding: '20px',
  border: '1px solid',
  borderRadius: '12px',
  borderColor: theme.colors.grayscale[2],
  alignSelf: 'start',
  '@media (max-width: 920px)': {
    position: 'absolute' as const,
    zIndex: 100,
    display: 'none',
  },
};

export const actionIconStyle = {
  padding: '4px',
  width: '30px',
  height: '30px',

  '@media (min-width: 920px)': {
    display: 'none',
  },
};

export const headStyle = {
  marginBottom: '32px',
};

export const mainTitleStyle = {
  fontWeight: 700,
  fontSize: '20px',
};

export const resetButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  fontWeight: 500,
  fontSize: '14px',
  color: theme.colors.grayscale[5],

  '&:hover': {
    color: theme.colors.blue[5],

    '& svg': {
      '& line': {
        stroke: theme.colors.blue[5],
      },
    },
  },
};

export const categoryTitleStyle = {
  fontWeight: 700,
  lineHeight: '19px',
};

export const categoryContainerStyle = {
  flexDirection: 'column' as const,
  marginBottom: '20px',
  gap: '8px',
};

export const submitButtonStyle = {
  fontWeight: 500,
  lineHeight: '21px',
  width: '100%',
  borderRadius: '8px',
  height: '40px',
};

export const paymentStyle = {
  button: {
    border: 'none',
    color: theme.colors.grayscale[5],
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.grayscale[7],
    },
  },
};
