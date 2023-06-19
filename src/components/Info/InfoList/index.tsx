import { ReactNode } from 'react';
import Icon from './../../Icon/index';
interface InfoListProps {
  list: {
    icon: string;
    link?: string;
    text: string | ReactNode;
  }[];
}

export const InfoList = ({ list }: InfoListProps) => (
  <ul>
    {list.map((item, index) => (
      <li key={index}>
        <Icon icon={item.icon} size={16} />
        {item.link && <a href={item.link}>{item.text}</a>}
        {!item.link && item.text}
      </li>
    ))}
  </ul>
);
