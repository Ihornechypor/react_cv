import { ReactNode } from 'react';
import * as Styled from './InfoText.styles';
interface InfoTextProps {
  text: string | ReactNode;
}
export const InfoText = ({ text }: InfoTextProps) => <Styled.InfoText>{text}</Styled.InfoText>;
