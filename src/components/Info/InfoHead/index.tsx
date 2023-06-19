import * as Styled from './InfoHead.styles';
interface InfoHeadProps {
  text: string;
}
export const InfoHead = ({ text }: InfoHeadProps) => <Styled.InfoHead>{text}</Styled.InfoHead>;
