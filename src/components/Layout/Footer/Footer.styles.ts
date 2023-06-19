import { styled } from 'styled-components';
import theme, { themeColors } from '../../../styles/theme';

const Footer = styled.footer`
  background-color: ${themeColors.dark};
  color: ${themeColors.white};
  padding: 10px ${theme.global.gutter};
`;
export { Footer };
