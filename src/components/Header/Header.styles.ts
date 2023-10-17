import { styled } from 'styled-components';
import theme, { themeColors } from '../../styles/theme';

const Header = styled.header`
  background-color: ${themeColors.dark};
  color: ${themeColors.primary};
  padding: 0 ${theme.global.gutter} 20px;
  display: flex;
  align-items: flex-end;
  gap: 40px;
`;

const HeaderImg = styled.img`
  height: 150px;
  transform: translateY(20%);
`;

const HeaderInfo = styled.div`
  h1 {
    font-size: 25px;
  }
  h2 {
    font-size: 16px;
  }
  p {
    margin-top: 6px;
  }
`;
export { Header, HeaderImg, HeaderInfo };
