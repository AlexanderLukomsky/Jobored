import { getTheme } from 'common/theme';

const theme = getTheme();

export const containerStyle = {
  padding: '20px',
  border: '1px solid',
  borderRadius: '12px',
  borderColor: theme.colors.grayscale[2],
  maxWidth: '315px',
  width: '100%',
  alignSelf: 'start',
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
