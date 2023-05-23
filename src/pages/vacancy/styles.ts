import { getTheme } from 'common/theme';

const theme = getTheme();

export const containerStyle = {
  gap: '20px',
  maxWidth: '773px',
  margin: '0 auto',
};

export const vacancyDescriptionStyle = {
  padding: '24px',
  border: '1px solid',
  borderColor: theme.colors.grayscale[2],
  borderRadius: '12px',
  color: theme.colors.grayscale[7],
  ul: {
    listStyle: 'inside',
  },
};
