import { ReactNode } from 'react';
import Icon from './../../Icon/index';
import * as Styled from './InfoList.styles';

interface InfoListProps {
  list: {
    icon: string;
    link?: string;
    text: string | ReactNode;
  }[];
}

export const InfoList = ({ list }: InfoListProps) => (
  <Styled.InfoList>
    {list.map((item, index) => (
      <Styled.InfoListItem key={index}>
        <Icon icon={item.icon} size={18} />
        {item.link ? (
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.text}
          </a>
        ) : (
          item.text
        )}
      </Styled.InfoListItem>
    ))}
  </Styled.InfoList>
);
