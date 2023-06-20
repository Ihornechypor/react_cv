import '@smastrom/react-rating/style.css';

import * as Styled from './InfoFeatureBox.styles';

interface InfoFeatureBoxProps {
  name?: string;
  list: {
    text: string;
    rating?: number;
  }[];
}
export const InfoFeatureBox = ({ name, list }: InfoFeatureBoxProps) => (
  <Styled.InfoFeatureBox>
    {name && <h3>{name}</h3>}
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item.text} {item.rating && item.rating}
        </li>
      ))}
    </ul>
  </Styled.InfoFeatureBox>
);
