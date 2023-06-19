import { styled } from 'styled-components';

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
`;

const InfoListItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 6px;
  font-size: 12px;
  a {
    text-decoration: none;
  }

  svg {
    flex-shrink: 0;
    margin-right: 8px;
  }
`;
export { InfoList, InfoListItem };
