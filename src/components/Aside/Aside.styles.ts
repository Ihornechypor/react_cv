import { styled } from 'styled-components';
import theme, { themeColors } from '../../styles/theme';

const Aside = styled.aside`
  padding: 5px 10px 20px ${theme.global.gutter};
  position: relative;
  border-right: 2px solid ${themeColors.dark};
`;
export { Aside };
