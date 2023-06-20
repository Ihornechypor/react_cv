import { styled } from 'styled-components';
import theme, { themeColors } from '../../styles/theme';

const Aside = styled.aside`
  padding: 5px ${theme.global.gutter} 20px;
  position: relative;
  border-right: 2px solid ${themeColors.dark};
`;
export { Aside };
