export const getTheme = () => ({
  fontFamily: 'Inter, sans-serif',
  colors: {
    grayscale: [
      '#FFFFFF',
      '#F5F5F6',
      '#EAEBED',
      '#D5D6DC',
      '#F7F7F8',
      '#ACADB9',
      '#7B7C88',
      '#232134',
    ],
    blue: ['', '#DEECFF', '#C9E0FF', '#B7D6FF', '#92C1FF', '#5E96FC', '#3B7CD3'],
  },

  components: {
    Text: {
      styles: {
        root: {
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '20px',
          color: '#232134',
        },
      },
    },
    Button: {
      styles: {
        root: {
          backgroundColor: '#5E96FC',
          '&:hover': {
            backgroundColor: '#3B7CD3',
          },
        },
      },
    },
  },
});
