export const themeColors = {
  black: '#000',
  dark: '#3a393f',
  primary: '#f4e956',
  white: '#fff',
};

export const themeFonts = {
  mainFont: "'Inter',Arial, sans-serif",
};

const theme = {
  global: {
    fontSize: '13px',
    font: themeFonts.mainFont,
    fontWeight: 400,
    textColor: themeColors.black,
    lineHeight: 1.4,
    gutter: '24px',
  },
};

export default theme;
